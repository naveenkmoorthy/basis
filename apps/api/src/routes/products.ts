import { Router, Request, Response } from "express";
import products from "../data/products.json";

const router = Router();

// GET /api/products — return all products
router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

// GET /api/products/:id — return a single product
router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
});

export default router;