import { initialPlaces } from "@/lib/db.js";
import { useState } from "react";
import PlaceCard from "@/components/PlaceCard";

export default function HomePage() {
  const [places, setPlaces] = useState(initialPlaces);

  console.log("INITIAL_PLACES: ", places);

  return (
    <div>
      <h1>Moin Hamburg! || Touri App</h1>
      <PlaceCard places={places} />
    </div>
  );
}
