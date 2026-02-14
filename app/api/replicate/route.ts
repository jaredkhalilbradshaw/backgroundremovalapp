import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request: Request) {
  try {
    // 1. Get the image from the request
    const req = await request.json();

    if (!req.image) {
        return NextResponse.json(
            { error: "No image provided in the request" },
            { status: 400 }
        );
    }

    // 2. Process the image with Replicate
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN as string,
  });

  // 3. Set the model
  const model = "cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003";

  // 4. Set the input image
  const input = {
    image: req.image,
  };
  
  // 5. Run the model and get the output image
    const output = await replicate.run(model, { input });

  // 6. Check if the output is NULL then return error bakc to the client
  if (!output) {
    console.log("Something went wrong with the Replicate API");
    return NextResponse.json(
        { error: "Something went wrong with the Replicate API" },
        { status: 500 }
    );
  }

  // 7. Return the output image to the client
  console.log("OUTPUT: ", output);
  console.log("OUTPUT TYPE: ", typeof output);

  let imageUrl: string;

  if (Array.isArray(output)) {
  imageUrl = output[0]; // Take first item if array
} else if (typeof output === "string") {
  imageUrl = output; // Already a string
} else {
  imageUrl = output.toString(); // Convert to string
}

return NextResponse.json({ output: imageUrl }, { status: 201 });
  } catch (error) {
    console.error("Error processing the image: ", error);
    return NextResponse.json(
        { error: "Error processing the image" },
        { status: 500 }
    );
  }
}  