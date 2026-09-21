
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./globals.css";


export const metadata = {
  title: "EdTech — Plateforme E-Learning Algérie 🇩🇿",
  description: "Développez vos compétences avec les meilleurs instructeurs et mentors en Algérie.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
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