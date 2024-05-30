import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggle";
import { DataProvider } from "./contexts/DataContext";

const satoshi = localFont({
  src: "./Satoshi-Variable.ttf",
  display: "swap",
});

export const metadata = {
  title: "Todo Next App",
  description: "View, add and edit todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={satoshi.className}>
        <ThemeProvider>
          <div id="root">
            <nav>
              <p className="logo">Todos</p>
              <ThemeToggle />
            </nav>
            <DataProvider>{children}</DataProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
