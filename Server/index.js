import dotenv from "dotenv";
dotenv.config()

import cors from "cors";
import express from "express";
import multer from "multer";
import { resolve } from "path";
import checkFileType from "./middleware/fileCheckType.js";
import { uploadFile } from "./middleware/uploadFile.js";
import router from "./Router/Route.js";
import bodyParser from "body-parser";

const app = express();


const PORT = 3000

app.use(cors());
app.use(express.json());
app.use("/static", express.static(resolve("public")));
app.use(bodyParser.urlencoded({ extended : true}))

app.use(uploadFile, checkFileType);
app.use(router);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") { 
      err.message = "max size file is 1MB";
    }
  }
  console.log(err);
  res.status(500).json(err);
});

app.listen(PORT, () => console.log("server run on port 3000"));
