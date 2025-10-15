import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl mt-4 md:mt-0">
      <ul className="flex md:gap-16 gap-8 justify-center items-center md:justify-start">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
