import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
