import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheFellowshipOfTheRing() {
  const dataVolume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{dataVolume1.title}</h1>
      <p>{dataVolume1.description}</p>
      <ul>
        <li>
          {dataVolume1.books[0].ordinal}: {dataVolume1.books[0].title}
        </li>
        <li>
          {dataVolume1.books[1].ordinal}: {dataVolume1.books[1].title}
        </li>
      </ul>
    </>
  );
}
