import { Router, Request, Response } from "express";
import products from "../data/products.json";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { category } = req.query;

  const filtered = category
    ? products.filter(
        (p) => p.category.toLowerCase() === (category as string).toLowerCase()
      )
    : products;

  res.json(filtered);
});

router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
});

router.get("/meta/categories", (req: Request, res: Response) => {
  const categories = [...new Set(products.map((p) => p.category))].sort();
  res.json(categories);
});

export default router;