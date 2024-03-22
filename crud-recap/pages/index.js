import initialPlaces from `@/lib/db.js`;
import { useState } from "react";

export default function HomePage() {
const [places, setPlaces] = useState(initialPlaces);

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
