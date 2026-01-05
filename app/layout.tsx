import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600"] });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Laís Duarte | Psicóloga Clínica",
  description:
    "Atendimento psicológico especializado para adultos e famílias, com foco em luto, sofrimento emocional e cuidados paliativos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-800">
        {children}
      </body>
    </html>
  );
}
