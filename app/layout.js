export const metadata = {
  title: "Products Store",
  description: "Products Store Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Products Store</h1>
          <p>Welcome to our store</p>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}