import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="text-center">{children}</main>
        <footer>Copyright by the wild Oasis</footer>
      </body>
    </html>
  );
}
