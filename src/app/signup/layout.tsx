import { ibm } from "../lib/fonts";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={ibm.className}>{children}</body>
      </html>
    );
  }