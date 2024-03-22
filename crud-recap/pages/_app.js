import GlobalStyle from "../styles";
import { initialPlaces } from "@/lib/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);

  console.log("INITIAL_PLACES: ", places);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} />
    </>
  );
}
