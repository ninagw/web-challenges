import Link from "next/link";
import Form from "@/components/Form";

export default function addPlaces({ places }) {
  return (
    <>
      <Form places={places} />
      <Link href="/">← Back to Homepage</Link>
    </>
  );
}
