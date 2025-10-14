import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="mx-auto">{children}</main>
        <footer>Copyright by the wild Oasis</footer>
      </body>
    </html>
  );
}
