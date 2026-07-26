import '@testing-library/jest-dom'

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor(public callback: IntersectionObserverCallback) {}

  observe(): void {
    return undefined
  }

  disconnect(): void {
    return undefined
  }

  unobserve(): void {
    return undefined
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

global.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver
