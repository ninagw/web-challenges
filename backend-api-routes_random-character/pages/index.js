import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const {
    data: randomCharacter,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (!randomCharacter) {
    return;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const { firstName, lastName, twitterName, geohash } = randomCharacter;

  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>Twitter: {twitterName}</p>
      <p>Geohash: {geohash}</p>
    </>
  );
}
