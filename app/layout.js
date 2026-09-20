export const metadata = {
  title: "Products Store",
  description: "Next.js Products Store routing task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
