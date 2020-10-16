import { Router } from "express";
import OrphanageController from "./controllers/OrphanageController";
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello in Happy Api !" });
});

routes.get("/orphanates", OrphanageController.index);
routes.get("/orphanates/:id", OrphanageController.one);
routes.post("/orphanates", upload.array("images"), OrphanageController.create);

export default routes;
