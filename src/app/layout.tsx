import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Load Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

// Load Montserrat for display text
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
});

// Load custom font if needed
// const myFont = localFont({
//   src: '../public/fonts/YourFont.woff2',
//   variable: '--font-custom',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: 'DaiWick - Modern Software Development Solutions',
  description: 'Delivering high-quality software solutions with a focus on results, not billable hours. Fast, transparent, and guaranteed.',
  keywords: ['software development', 'AI solutions', 'web development', 'mobile apps', 'digital transformation'],
  authors: [{ name: 'Daiji Kimura', url: 'https://daiwick.dev' }],
  creator: 'Daiji Kimura',
  publisher: 'DaiWick',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'DaiWick - Modern Software Development Solutions',
    description: 'Delivering high-quality software solutions with a focus on results, not billable hours.',
    siteName: 'DaiWick',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DaiWick - Modern Software Development Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DaiWick - Modern Software Development Solutions',
    description: 'Delivering high-quality software solutions with a focus on results, not billable hours.',
    images: ['/images/og-image.jpg'],
    creator: '@daijikimura',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/_next/static/media/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <div className="relative overflow-hidden">
          {/* Background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
          </div>
          
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
