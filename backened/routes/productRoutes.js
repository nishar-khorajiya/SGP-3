import express from "express";

import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productCategoryController,
} from "../controllers/productController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
const router = express.Router();


//routes
//create product
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//get all product without photo
router.get("/get-product", getProductController);

//get single product without photo
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;