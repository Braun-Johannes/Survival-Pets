import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const pets = await Pet.find();
      response.status(200).json(pets);
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
