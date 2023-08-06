package main

import (
  "context"
  "flag"
  "fmt"
  "os"

  "dagger.io/dagger"
)

func main() {
  var pipelineMethod string
  flag.StringVar(&pipelineMethod, "pipeline", "Build", "The method to Execute, either Build, DeployGitHubPages, DeployFirebase")

  // Parse all flags
  flag.Parse()

  // Execute Pipeline Method
  switch pipelineMethod {
  case "Build":
    if err := build(context.Background()); err != nil {
      panic(err)
    }
  case "DeployGitHubPages":
    if err := deployGitHubPages(context.Background()); err != nil {
      panic(err)
    }
  case "DeployFirebase":
    fmt.Println("DeployFirebase")
  default:
    // Unsupported Method
    fmt.Printf("unsupported flag -pipeline: %s.\n", pipelineMethod)
  }
}

func build(ctx context.Context) error {
  // initialize Dagger client
  client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stdout))
  if err != nil {
    return err
  }

  defer client.Close()

  // use a node:16-slim container
  // mount the source code directory on the host
  // at /src in the container
  source := client.Host().Directory("./dagger").DockerBuild(dagger.DirectoryDockerBuildOpts{Dockerfile: "./Dockerfile.npm"}).
    WithDirectory("/src", client.Host().Directory("."), dagger.ContainerWithDirectoryOpts{
      Exclude: []string{"node_modules/", "dagger/"},
    })

  // set the working directory in the container
  // install application dependencies
  runner := source.WithWorkdir("/src").
    WithExec([]string{"npm", "install"}).
    WithExec([]string{"npm", "run", "lint"})

  // run application tests
  test := runner.
    WithExec([]string{"npm", "run", "test"}).
    Directory("./coverage")

  // move coverage report to host
  _, err = test.Export(ctx, "./coverage")
  if err != nil {
    return err
  }

  // build application
  buildDir := runner.WithExec([]string{"npm", "run", "build"}).
  Directory("./dist")

  // move distribution folder to host
  _, err = buildDir.Export(ctx, "./dist")
  if err != nil {
    return err
  }

  e, err := buildDir.Directory("web").Entries(ctx)
  if err != nil {
    return err
  }

  fmt.Printf("build dir contents:\n %s\n", e)

  return nil
}

func deployGitHubPages(ctx context.Context) error {
  // initialize Dagger client
  client, err := dagger.Connect(ctx, dagger.WithLogOutput(os.Stdout))
  if err != nil {
    return err
  }

  githubToken := client.SetSecret("github-token", os.Getenv("GH_TOKEN"))

  // use a node:16-slim container
  // mount the source code directory on the host
  // at /src in the container
  source := client.Host().Directory("./dagger").DockerBuild(dagger.DirectoryDockerBuildOpts{Dockerfile: "./Dockerfile.npm"}).
    WithSecretVariable("GH_TOKEN", githubToken).
    WithDirectory("/src", client.Host().Directory("."), dagger.ContainerWithDirectoryOpts{
      Exclude: []string{"node_modules/", "dagger/"},
    })

  // set the working directory in the container
  // install application dependencies
  exportDir := source.WithWorkdir("/src").
    WithExec([]string{"env"}).
    WithExec([]string{"npm", "install"}).
    WithExec([]string{"npm", "run", "deploy:github", "--", "--repo=https://github.com/jolt23/web.git", "--name=jolt23", "--email=github-actions@github.com"}).
    Directory("./dist")

  // move distribution folder to host
  _, err = exportDir.Export(ctx, "./dist")
  if err != nil {
    return err
  }

  return nil
}
