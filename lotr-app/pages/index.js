import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to next.js!</h1>
      <ul>
        <li>
          <Link href="../volumes">All Volumes</Link>
        </li>
      </ul>
    </div>
  );
}
