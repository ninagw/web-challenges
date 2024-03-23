import Link from "next/link";
import Form from "@/components/Form";

export default function addPlaces({ places, onAddPlace }) {
  return (
    <>
      <Form places={places} onSubmit={onAddPlace} />
      <Link href="/">← Back to Homepage</Link>
    </>
  );
}
