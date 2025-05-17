'use client'
import type { ThemeProviderProps } from 'next-themes'
import { ConvexAuthNextjsProvider } from '@convex-dev/auth/nextjs'
import { ConvexReactClient } from 'convex/react'
import dynamic from 'next/dynamic'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const NextThemesProvider = dynamic(
  async () => import('next-themes').then(e => e.ThemeProvider),
  {
    ssr: false,
  },
)

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    </ConvexAuthNextjsProvider>
  )
}

export { Providers }
