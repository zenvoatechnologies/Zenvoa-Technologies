import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Site",
  description: "Basic Next.js SEO-optimized template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
