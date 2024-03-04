import Link from "next/link";
import { introduction } from "@/lib/data";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship Of The Ring – Volume 1
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers – Volume 2</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return Of The King – Volume 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
