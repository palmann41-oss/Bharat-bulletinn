import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bharat Bulletin",
  description: "Real-time Hindi News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
