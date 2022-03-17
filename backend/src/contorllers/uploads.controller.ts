import { nanoid } from "nanoid";

export const handleFileUpload = (req: any, res: any) => {
  try {
    if (!req.files) {
      return res.send({
        status: false,
        message: "No files",
      });
    }
    const { image } = req.files;
    const { name } = image;
    const fileExtStartIndex = name.lastIndexOf(".");
    const fileExt = name.slice(fileExtStartIndex, name.length).toLowerCase();

    const fileName = nanoid() + fileExt;

    image.mv("./uploads/" + fileName);

    res.status(200).json({
      message: "File is uploaded",
      fileName,
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
