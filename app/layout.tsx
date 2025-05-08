import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight:["300","400","600", "800"], style:["normal"], subsets:["latin"] , variable:"--fontPoppins" 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
