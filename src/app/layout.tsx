import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import SocialBar from '@/components/layout/SocialBar';
import EarlyAccessBar from '@/components/layout/EarlyAccessBar';
import PageTransitionProvider from '@/components/ui/PageTransitionContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tokenizeme.ai'),
  title: "TokenizeMe | The First Personal Token Platform for Creators & Influencers",
  description: "Launch your personal token in minutes. Join the creator economy revolution with TokenizeMe - the most secure and efficient platform for creator tokens.",
  keywords: "personal tokens, creator tokens, influencer tokens, creator economy, blockchain, tokenization, digital assets, creator monetization",
  openGraph: {
    title: "TokenizeMe | Transform Your Influence Into a Digital Asset",
    description: "Launch your personal token in minutes. Join the creator economy revolution with TokenizeMe.",
    url: "https://tokenizeme.ai",
    siteName: "TokenizeMe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TokenizeMe Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenizeMe | Transform Your Influence Into a Digital Asset",
    description: "Launch your personal token in minutes. Join the creator economy revolution with TokenizeMe.",
    images: ["/og-image.jpg"],
    creator: "@tokenizeme",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://tokenizeme.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageTransitionProvider>
          <HeaderWrapper />
          <main className="min-h-screen">
            {children}
          </main>
          <SocialBar />
          <EarlyAccessBar />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
