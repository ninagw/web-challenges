import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data.js";

export default function Volume1() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log("VOLUME1: ", volume1);

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        <li>
          {volume1.books[0].ordinal}: {volume1.books[0].title}
        </li>
        <li>
          {volume1.books[1].ordinal}: {volume1.books[1].title}
        </li>
      </ul>
      <Image
        src={volume1.cover}
        height={230}
        width={140}
        alt={`Cover of ${volume1.title}`}
      />
    </>
  );
}
