import "./globals.css";

export const metadata = {
  title: "Todo Next App",
  description: "View, add and edit todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
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
