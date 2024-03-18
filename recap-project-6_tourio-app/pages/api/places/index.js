// import { places } from "../../../lib/db";
import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(404).json({ error: "Not found" });
    }
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);
      response.status(200).json({ status: "OK" });
    } catch (error) {
      response.status(404).json({ error: "Not found." });
    }
  }
}
