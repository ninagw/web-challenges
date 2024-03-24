import { useRouter } from "next/router";

export default function DetailPage({ places }) {
  const router = useRouter();
  const { id } = router.query;

  const onePlaceById = places.find((place) => place.id === id);
  console.log("PLACE: ", onePlaceById);

  return (
    <>
      <h1>Detail Page</h1>
      {places.find((place) => place.name)}
    </>
  );
}
