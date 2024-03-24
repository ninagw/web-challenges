import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage({ places }) {
  const router = useRouter();
  const { id } = router.query;

  const onePlaceById = places.find((place) => place.id === id);
  console.log("PLACE: ", onePlaceById);

  return (
    <>
      <h1>{onePlaceById.name}</h1>
      <p>{onePlaceById.location}</p>
      <Image
        src={onePlaceById.image}
        alt={onePlaceById.name}
        width={300}
        height={200}
      />
      <p>{onePlaceById.description}</p>
      {/* <Link>{onePlaceById.mapURL}</Link> */}
    </>
  );
}
