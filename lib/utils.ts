import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDuration(startTimestamp: number, endTimestamp: number) {
  const duration = endTimestamp - startTimestamp
  return duration
}
