import { Playfair_Display, Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { Toaster } from "@/components/ui/sonner";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
    variable: "--font-playfair",
    display: "swap",
});
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-cormorant",
    display: "swap",
});
const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-lato",
    display: "swap",
});
export const metadata = {
    title: "Mis 15 años - Pia",
    description: "Te invito a celebrar mis 15 años",
    generator: "v0.app",
};
export default function RootLayout({ children, }) {
    return (<html lang="es" className={`${playfair.variable} ${cormorant.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <ThemeWrapper>{children}</ThemeWrapper>
        <Toaster />
      </body>
    </html>);
}
