
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import PageHeader from '@/components/page-header';
import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <my-widget project-id="10"></my-widget>
          <script src="https://feedwave-widget-snowy.vercel.app//widget.umd.js"></script>
        </Head>
        <body>
          <my-widget project-id="10"></my-widget>
          <script src="https://feedwave-widget-snowy.vercel.app//widget.umd.js"></script>
          <PageHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}