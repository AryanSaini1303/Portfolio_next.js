import { Concert_One } from "next/font/google";
import { Playwrite_US_Modern } from "next/font/google";
import "./globals.css";

const concert = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

const playwrite = Playwrite_US_Modern({
  weight: "200",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio! I’m Aryan, a passionate full-stack web developer with a focus on AI and innovative tech solutions. I specialize in Next.js, Postgres, Prisma, and machine learning to build high-performance, user-centric applications. Explore my projects and see how I bring ideas to life with cutting-edge technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
