import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import Providers from '@/components/ui/Providers'

export const metadata = {
  title: 'DiscussIt',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const monterserrat = Montserrat({
  subsets: ['latin'],
  weight: '100'
});

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html 
      lang='en'
        className={cn(
          'bg-white text-slate-900 antialiased light', 
          monterserrat.className
          )}>
        <body className={cn('min-h-screen pt-12 bg-slate-50 antialiased', monterserrat.className)}>
        <Providers>
          {/* @ts-expect-error server component */}
          <Navbar />

            {authModal}
          <div className={cn('container max-w-7xl mx-auto h-full pt-12', monterserrat.className)}>
            {children}
          </div> 
        </Providers>

        <Toaster />
        </body>
    </html>
  )
}
