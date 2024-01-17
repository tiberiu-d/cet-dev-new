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

// themeing and flicker fixing
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import theme from "@/styles/themeConfig";
import { ConfigProvider } from "antd";
import TanstackProvider from "@/providers/TanstackProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <ConfigProvider theme={theme}>
          <main className="h-screen flex flex-col p-5 subpixel-antialiased">
            <Card className="flex flex-col gap-2 shadow-lg h-full">
              <TooltipProvider>
                <CardHeader className="p-0">
                  <MenuBar />
                </CardHeader>
                <CardContent className="flex p-2 overflow-y-auto h-full">
                  <StyledComponentsRegistry>
                    <TanstackProvider>{children}</TanstackProvider>
                  </StyledComponentsRegistry>
                </CardContent>
              </TooltipProvider>
            </Card>
          </main>
          <Toaster position="bottom-center" />
        </ConfigProvider>
      </body>
    </html>
  );
}
