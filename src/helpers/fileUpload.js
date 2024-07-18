export const fileUpload = async (file) => {
  if (!file) throw new Error("There is not a file to upload");

  const cloudUrl = "https://api.cloudinary.com/v1_1/doluemwpo/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Error uploading an image");
    const cloudResp = await resp.json();
    console.log({cloudResp});
    return cloudResp.secure_url;

  } catch (error) {
    throw new Error(error.message);
  }
};
