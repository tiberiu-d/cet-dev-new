import type { Metadata } from 'next'
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const font = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Escalation Tracker",
  description: "my baby",
};

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MenuBar from "@/components/common/menu/menuBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <main className="min-h-screen flex flex-col p-10">
          <Card className="flex flex-col flex-grow gap-2 shadow-lg ">
            <CardHeader className="p-0">
              <MenuBar />
            </CardHeader>
            <CardContent className="flex-grow p-3">{children}</CardContent>
          </Card>
        </main>
      </body>
    </html>
  );
}
