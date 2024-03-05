import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleOnClick() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title, color }) => {
          return (
            <li key={color}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" name="randomButton" onClick={handleOnClick}>
        Get A Random Volume
      </button>
    </>
  );
}
