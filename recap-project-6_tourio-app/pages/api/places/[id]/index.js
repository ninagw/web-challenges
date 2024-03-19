// import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ error: "Not found" });
    }

    return response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    const updatePlace = request.body;
    await Place.findByIdAndUpdate(id, updatePlace);
    return response.status(200).json({ message: `Place ${id} updated!` });
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    return response.status(200).json({ message: `Place ${id} deleted!` });
  }
}
