import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="/">
        KP Pizza
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          className="bg-primary text-white px-8 py-2 rounded-full"
          href="/logout">
          Logout
        </Link>
      </nav>
    </header>
  );
}
