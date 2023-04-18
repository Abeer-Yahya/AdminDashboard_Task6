import "./globals.css";

export const metadata = {
  title: "STA | Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
