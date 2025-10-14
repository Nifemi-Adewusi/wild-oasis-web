import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <ul>
      <Logo />
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
