import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const font = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <main className="min-h-screen flex flex-col p-10">{children}</main>
      </body>
    </html>
  );
}
