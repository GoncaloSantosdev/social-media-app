// Clerk
import { ClerkProvider } from "@clerk/nextjs";
// Font
import { Inter } from "next/font/google";
// Styles
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media App",
  description: "Next.js 13 social media app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
