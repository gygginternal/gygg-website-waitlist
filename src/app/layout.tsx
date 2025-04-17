import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Shared/Header/Header'
import Footer from '@/components/Shared/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

// Explicitly define the props for RootLayout
interface LayoutProps {
  children: React.ReactNode;
  customHeader?: React.ReactNode;
}

const RootLayout = ({ children, customHeader }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {customHeader ?? <Header />}
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
