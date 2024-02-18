import { Router } from "express";

import Product from "../models/Product";

import { getClient } from "../db";
import { ObjectId } from "mongodb";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const client = await getClient();

    let args: any = {};

    if (req.query.maxPrice) {
      args.price = { $lte: parseFloat(req.query.maxPrice as string) };
    }

    if (req.query.includes) {
      args.name = {
        $regex: req.query.includes as string,
        $options: "i",
      };
    }

    let limit = 0;
    if (req.query.limit) {
      limit = parseInt(req.query.limit as string);
    }
    console.log(args);

    const results = await client
      .db("shop_db")
      .collection<Product>("products")
      .find(args)
      .limit(limit)
      .toArray();

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const client = await getClient();

    const results = await client
      .db("shop_db")
      .collection<Product>("products")
      .findOne({ _id: new ObjectId(req.params.id) });

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.post("products", async (req, res) => {
  const product = req.body as Product;

  // validation

  try {
    const client = await getClient();
    const results = await client
      .db("shop_db")
      .collection<Product>("products")
      .insertOne(product);

    res.status(201).json(results);
  } catch (err) {
    res.status(500).json(err); // 500 means internal server error
  }
});

routes.put("/:id", async (req, res) => {
  const product = req.body as Product;
  try {
    const client = await getClient();

    const found = await client
      .db("shop_db")
      .collection<Product>("products")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!found) {
      res.status(404).json({ message: "Not found" });
    } else {
      const results = await client
        .db("shop_db")
        .collection<Product>("products")
        .replaceOne({ _id: new ObjectId(req.params.id) }, product);

      res.status(200).json(results);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    const client = await getClient();

    // turn this into a function
    const found = await client
      .db("shop_db")
      .collection<Product>("products")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!found) {
      // turn into a helper function
      res.status(404).json({ message: "Not found" });
    } else {
      const results = await client
        .db("shop_db")
        .collection<Product>("products")
        .deleteOne({ _id: new ObjectId(req.params.id) });

      res.status(204).json(results); // 204: No Content
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export default routes;
