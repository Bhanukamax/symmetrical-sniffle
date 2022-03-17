const uploadRouter = Router();
import * as express from "express";
import { Router } from "express";
import { handleFileUpload } from "../contorllers/uploads.controller";

uploadRouter.get("/", express.static("uploads"));
uploadRouter.get("/:id", express.static("uploads"));
uploadRouter.post("/", handleFileUpload);

export default uploadRouter;
