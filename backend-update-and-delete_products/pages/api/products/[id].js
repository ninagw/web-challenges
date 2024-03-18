import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // GET request, um Daten zu lesen
  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  // PUT, um Daten zu verändern
  if (request.method === "PUT") {
    // get the data from the request body
    const updatedProduct = request.body;

    // find product by its ID and update it
    await Product.findByIdAndUpdate(id, updatedProduct);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    // return OK status in case update was successful
    response.status(200).json({ status: "Product successfully updated." });
  }
}
