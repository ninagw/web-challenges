import { introduction } from "@/resources/lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            volume 1: The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">volume 2: The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            volume 3: The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
