// import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);
    response.status(200).json(place);
  } else {
    response.status(404).json({ status: "Not found" });
  }

  if (request.method === "PATCH") {
    try {
      const updatePlace = request.body;
      await Place.findByIdAndUpdate(id, updatePlace);
      response.status(200).json({ message: `Place ${id} updated!` });
    } catch (error) {
      response.status(404).json({ error: "Not found." });
    }
  }
}
