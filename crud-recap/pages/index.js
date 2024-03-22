import { initialPlaces } from "@/lib/db.js";
import { useState } from "react";

export default function HomePage() {
  const [places, setPlaces] = useState(initialPlaces);

  console.log("INITIAL_PLACES: ", places);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      {places.map((place) => (
        <li key={place.id}>
          Name: {place.name}, Location: {place.location}
        </li>
      ))}
    </div>
  );
}
