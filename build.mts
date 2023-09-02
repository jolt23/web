import { connect, Client, Container, Directory } from '@dagger.io/dagger'
import { createRequire } from 'module'
import { env } from 'node:process'

// initialize Dagger client
connect(
  async (client: Client) => {
    // get reference to the local project
    const source = client
      .host()
      .directory('.', { exclude: ['node_modules/', './docker'] })

    // build docker image with dependencies
    const node = client
      .host()
      .directory('./docker')
      .dockerBuild({ dockerfile: './Dockerfile.npm' })

    // identify pipeline argument passed in to determine pipeline execution
    const require = createRequire(import.meta.url)
    var argv = require('minimist')(process.argv.slice(2))
    let pipeline

    // check pipeline argument which can include string or be a boolean if left empty
    // if pipeline is not defined then build execution is assumed
    if ('pipeline' in argv) {
      if (typeof argv['pipeline'] === 'boolean') {
        pipeline = 'empty definition'
      } else {
        pipeline = argv['pipeline']
      }
    } else {
      pipeline = 'build'
    }

    let runner

    switch (pipeline) {
      case 'build': {
        await build(client, source, node)
        break
      }
      case 'deployGitHubPages': {
        await deployGitHubPages(client, source, node)
        break
      }
      case 'deployFirebase': {
        console.log('Deployment to Firebase currently not supported')
        process.exit(1)
        break
      }
      default: {
        console.log('%s is not supported', pipeline)
        process.exit(1)
      }
    }
  },
  { LogOutput: process.stderr }
)

// run npm build along with validation of lint and test scripts
function build(client: Client, source: Directory, node: Container) {
  buildPrint()

  // mount cloned repository into Node image
  let runner = node
    .withDirectory('/src', source)
    .withWorkdir('/src')
    .withExec(['npm', 'install'])

  // run lint
  let lint = runner.withExec(['npm', 'run', 'lint'])

  // run tests
  let test = lint.withExec(['npm', 'run', 'test'])

  test.directory('./coverage').export('./build/coverage')

  // build application
  // write the build output to the host
  return test
    .withExec(['npm', 'run', 'build:prod'])
    .directory('./dist')
    .export('./build/dist')
}

// deploy to github pages current build/dist location
function deployGitHubPages(client: Client, source: Directory, node: Container) {
  deployPrint()

  let token
  // check if GitHub Token has been defined as it is a requirement to deploy
  if ('GH_TOKEN' in env) {
    token = client.setSecret('github-token', env['GH_TOKEN'])
  } else {
    console.log('GH_TOKEN is not defined in environment variables')
    process.exit(1)
  }

  let nodeCache = client.cacheVolume('nodemodules')

  // configure secret and install required modules
  let runner = node
    .withSecretVariable('GH_TOKEN', token)
    .withDirectory('/src', source)
    .withMountedCache('/src/node_modules', nodeCache)
    .withWorkdir('/src')
    .withExec(['npm', 'install'])
    .withExec(['npm', 'run', 'build'])

  let dist = client.host().directory('./build/dist')

  // execute github pages deployment
  return runner
    .withDirectory('./dist', dist)
    .withExec([
      'npm',
      'run',
      'deploy:github',
      '--',
      '--repo=https://github.com/jolt23/web.git',
      '--name=jolt23',
      '--email=github-actions@github.com',
    ])
    .directory('./dist')
    .export('./build/dist')
}

function buildPrint() {
  console.log('                                                      ')
  console.log('                                                      ')
  console.log(' ________   ___  ___   ___   ___        ________      ')
  console.log(
    '|\\   __  \\ |\\  \\|\\  \\ |\\  \\ |\\  \\      |\\   ___ \\     '
  )
  console.log(
    '\\ \\  \\|\\ /_\\ \\  \\\\\\  \\\\ \\  \\\\ \\  \\     \\ \\  \\_|\\ \\    '
  )
  console.log(
    ' \\ \\   __  \\\\ \\  \\\\\\  \\\\ \\  \\\\ \\  \\     \\ \\  \\ \\\\ \\   '
  )
  console.log(
    '  \\ \\  \\|\\  \\\\ \\  \\\\\\  \\\\ \\  \\\\ \\  \\____ \\ \\  \\_\\\\ \\  '
  )
  console.log(
    '   \\ \\_______\\\\ \\_______\\\\ \\__\\\\ \\_______\\\\ \\_______\\ '
  )
  console.log('    \\|_______| \\|_______| \\|__| \\|_______| \\|_______| ')
  console.log('                                                      ')
  console.log('                                                      ')
  console.log('building web application                              ')
  console.log('                                                      ')
  console.log('                                                      ')
}

function deployPrint() {
  console.log(
    '                                                                        '
  )
  console.log(
    '                                                                        '
  )
  console.log(
    ' ________   _______    ________   ___        ________       ___    ___  '
  )
  console.log(
    '|\\   ___ \\ |\\  ___ \\  |\\   __  \\ |\\  \\      |\\   __  \\     |\\  \\  /  /| '
  )
  console.log(
    '\\ \\  \\_|\\ \\\\ \\   __/| \\ \\  \\|\\  \\\\ \\  \\     \\ \\  \\|\\  \\    \\ \\  \\/  / / '
  )
  console.log(
    ' \\ \\  \\ \\\\ \\\\ \\  \\_|/__\\ \\   ____\\\\ \\  \\     \\ \\  \\\\\\  \\    \\ \\    / /  '
  )
  console.log(
    '  \\ \\  \\_\\\\ \\\\ \\  \\_|\\ \\\\ \\  \\___| \\ \\  \\____ \\ \\  \\\\\\  \\    \\/  /  /   '
  )
  console.log(
    '   \\ \\_______\\\\ \\_______\\\\ \\__\\     \\ \\_______\\\\ \\_______\\ __/  / /     '
  )
  console.log(
    '    \\|_______| \\|_______| \\|__|      \\|_______| \\|_______||\\___/ /      '
  )
  console.log(
    '                                                          \\|___|/       '
  )
  console.log(
    '                                                                        '
  )
  console.log(
    'deploying web application                                               '
  )
  console.log(
    '                                                                        '
  )
  console.log(
    '                                                                        '
  )
}
