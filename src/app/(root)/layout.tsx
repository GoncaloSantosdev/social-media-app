import { Inter } from "next/font/google";
// Auth
import { ClerkProvider } from "@clerk/nextjs";
// Components
import { BottomBar, LeftSideBar, RightSideBar, TopBar } from "@/components";
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
        <body className={inter.className}>
          <TopBar />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
