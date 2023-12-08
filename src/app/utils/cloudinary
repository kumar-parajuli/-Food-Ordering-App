import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload files on CLOUDINARY with multer
const uploadOnCloudinary = async (fileBuffer) => {
  try {
    if (!fileBuffer) return null;

    // Save the buffer to a temporary file
    const tempFilePath = "./public/temp/temporaryFile";
    fs.writeFileSync(tempFilePath, fileBuffer);

    // Upload the temporary file to Cloudinary
    const response = await cloudinary.uploader.upload(tempFilePath, {
      resource_type: "auto",
    });

    // Remove the temporary file
    fs.unlinkSync(tempFilePath);

    // File has been uploaded successfully
    console.log("File is uploaded on Cloudinary", response.url);
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);

    // If an error occurs, you might want to handle it accordingly
    return null;
  }
};

export { uploadOnCloudinary };
