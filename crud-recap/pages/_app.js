import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);
  // console.log("INITIAL_PLACES: ", places);

  function handleAddPlace(newPlaceData) {
    const { name, location, image, mapURL, description } = newPlaceData;
    const newPlace = { id: uuidv4(), newPlaceData };

    setPlaces([...places, newPlace]);
  }

  // JANAs Ansatz:
  // function handleAddPlace(placeData) {
  //   const { name, location, image, mapURL, description } = placeData;
  //   setPlaces([...places, { id: uuidv4(), name, location, image, mapURL, description }]);
  // }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} onAddPlace={handleAddPlace} />
    </>
  );
}
