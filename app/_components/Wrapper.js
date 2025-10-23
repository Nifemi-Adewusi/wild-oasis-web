export default function Wrapper({ children }) {
  return (
    <div className="px-8 py-12">
      <main className="max-w-7xl px-10 mx-auto">{children}</main>
    </div>
  );
}
