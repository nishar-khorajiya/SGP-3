import express from "express";
import {
  createProductController, getProductController, getSingleProductController
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );

router.get("/get-product",getProductController);
router.get("/get-product/:slug",getSingleProductController);

export default router;