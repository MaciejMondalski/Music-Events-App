import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>
        <h2>About</h2>
      </Link>
    </div>
  );
}
