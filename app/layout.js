import './globals.css';
import { Inconsolata } from 'next/font/google'

const myFont = Inconsolata({
  subsets: ['latin'],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
