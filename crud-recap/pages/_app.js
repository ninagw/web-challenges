import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);
  // console.log("INITIAL_PLACES: ", places);

  function handleAddPlace(newPlaceData) {
    const newPlace = { id: uuidv4(), newPlaceData };

    setPlaces([...places, newPlace]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
