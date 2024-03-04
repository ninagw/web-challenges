import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume3() {
  const dataVolume3 = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{dataVolume3.title}</h1>
      <p>{dataVolume3.description}</p>
      <ul>
        <li>
          {dataVolume3.books[0].ordinal}: {dataVolume3.books[0].title}
        </li>
        <li>
          {dataVolume3.books[1].ordinal}: {dataVolume3.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="the bookcover of the return of the king"
      />
    </>
  );
}
