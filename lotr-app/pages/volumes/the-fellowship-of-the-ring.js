import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume1() {
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
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="the bookcover of the fellowship of the ring"
      />
    </>
  );
}
