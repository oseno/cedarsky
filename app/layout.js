import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Cedarsky | Educational Consultancy for University and Visa Guidance',
  description: 'Cedarsky offers expert consultancy for course selection, university admissions, visa applications, and career changes. Book your consultation today!',
  keywords: 'educational consultancy, university selection, visa application help, career consultation, study abroad',
  openGraph: {
    title: 'Cedarsky Educational Consultancy',
    description: 'Your path to the right course, university, and career. Book a free consultation!',
    url: 'https://oseno.github.io/cedarsky',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}