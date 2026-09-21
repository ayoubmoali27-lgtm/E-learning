
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./globals.css";


export const metadata = {
  title: "EdTech",
  description: "EdTech Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}