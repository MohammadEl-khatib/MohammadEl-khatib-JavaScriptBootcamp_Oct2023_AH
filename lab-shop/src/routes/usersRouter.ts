import { Router } from "express";

import User from "../models/User";

import { getClient } from "../db";
import { ObjectId } from "mongodb";

const routes = Router();

routes.get("/:id", async (req, res) => {
  try {
    const client = await getClient();

    const results = await client
      .db("shop_db")
      .collection<User>("users")
      .findOne({ _id: new ObjectId(req.params.id) });

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.post("users", async (req, res) => {
  const product = req.body as User;
  try {
    const client = await getClient();
    const results = await client
      .db("shop_db")
      .collection<User>("user")
      .insertOne(product);

    res.status(201).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

routes.put("/:id", async (req, res) => {
  const product = req.body as User;
  try {
    const client = await getClient();

    const found = await client
      .db("shop_db")
      .collection<User>("users")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!found) {
      res.status(404).json({ message: "Not found" });
    } else {
      const results = await client
        .db("shop_db")
        .collection<User>("users")
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

    const found = await client
      .db("shop_db")
      .collection<User>("users")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!found) {
      res.status(404).json({ message: "Not found" });
    } else {
      const results = await client
        .db("shop_db")
        .collection<User>("users")
        .deleteOne({ _id: new ObjectId(req.params.id) });

      res.status(204).json(results);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export default routes;
