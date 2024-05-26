import "./globals.css";
import localFont from 'next/font/local'

const satoshi = localFont({
  src: './Satoshi-Variable.ttf',
  display: 'swap',
})

export const metadata = {
  title: "Todo Next App",
  description: "View, add and edit todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={satoshi.className}>
        <div id="root">
          <nav>
            <p>Todos</p>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
