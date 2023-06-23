import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Comfortaa } from 'next/font/google'
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from './NavBar';

const inter = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Международная фото галерея - VV17CH3R Img APP',
  description: 'Международная фото галерея с случайными картинками из USA API by VV17CH3R',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar/>
          <main>
            <Container className='py-4'>
              {children}
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  )
}
