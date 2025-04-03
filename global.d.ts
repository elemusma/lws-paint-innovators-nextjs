// global.d.ts
interface Window {
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
  }