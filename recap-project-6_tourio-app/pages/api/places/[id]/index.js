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
    try {
      const place = await Place.findById(id);
      return response.status(200).json(place);
    } catch (error) {
      return response.status(404).json({ error: "Not found" });
    }
  }

  if (request.method === "PATCH") {
    try {
      const updatePlace = request.body;
      await Place.findByIdAndUpdate(id, updatePlace);
      return response.status(200).json({ message: `Place ${id} updated!` });
    } catch (error) {
      return response.status(404).json({ error: "Not found." });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);
      return response.status(200).json({ message: `Place ${id} deleted!` });
    } catch (error) {
      return response.status(404).json({ error: "Not found." });
    }
  }
}
