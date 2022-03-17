import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import postRouter from "./src/routes/post.router";
import uploadRouter from "./src/routes/upload.router";
import { initDb } from "./src/util/mongoose";

const bootstrap = async () => {
  const app = express();
  await initDb();
  app.use(cors());
  app.use(express.json());

  app.use(fileUpload({ createParentPath: true }));

  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  const port = 4000;

  app.use("/uploads", uploadRouter);

  app.use("/post", postRouter);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
