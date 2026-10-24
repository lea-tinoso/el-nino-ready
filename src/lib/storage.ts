import { useEffect, useState } from 'react'

const PREFIX = 'elnino-ready:'

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw === null ? fallback : (JSON.parse(raw) as T)
  } catch {
    return fallback
  }
}

// State that survives reloads on this device. Private mode just means it won't persist.
export function useStoredState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => read(key, fallback))
  useEffect(() => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
    } catch {
      // storage unavailable
    }
  }, [key, value])
  return [value, setValue] as const
}
