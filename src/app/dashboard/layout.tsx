import { ibm } from "../lib/fonts";


export default function Layout({
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