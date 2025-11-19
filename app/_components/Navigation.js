import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();
  console.log(session.user)
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
          {session.user?.image ? <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            <div className="flex items-center gap-2">

              <Image
                src={session.user.image}
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Guest area</span>
            </div>

          </Link>

            : <Link
              href="/login"
              className="hover:text-accent-400 transition-colors"
            >

              Login
            </Link>}
        </li>
      </ul>
    </nav>
  );
}
