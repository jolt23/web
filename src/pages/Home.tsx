import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import TabsSection from '../components/TabsSection'

type JQueryLike = { fn?: { fullpage?: (...args: unknown[]) => unknown } }

export default function Home() {
  useEffect(() => {
    try {
      const win = window as Window & { $?: JQueryLike; jQuery?: JQueryLike }
      const $ = win.$ ?? win.jQuery
      if ($ && $.fn && $.fn.fullpage) {
        const jq = $ as JQueryLike
        const doc = document.documentElement
        if (!doc.classList.contains('fp-enabled')) {
          const init = jq.fn.fullpage
          if (init) {
            init({
              anchors: ['firstPage', 'secondPage', 'thirdPage'],
            } as unknown)
          }
        }
      }
    } catch (e) {
      // ignore: fullpage may be initialized elsewhere
    }
  }, [])

  return (
    <div id="fullpage" className="page-wrapper">
      <Hero />
      <TabsSection />
    </div>
  )
}
