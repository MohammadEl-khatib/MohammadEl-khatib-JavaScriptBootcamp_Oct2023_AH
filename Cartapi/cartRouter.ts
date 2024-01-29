import { Router, Request, Response } from "express";
import { client } from "./db";
import { Filter, ObjectId } from "mongodb";
import { Product } from "./productRouter";

export const cartRouter = Router();

type CartItem = {
  userId: ObjectId;
  product: Product;
  quantity: number;
};

type GetCartParams = { userId: string };

cartRouter.get(
  "/users/:userId/cart",
  async (req: Request<GetCartParams, CartItem[]>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<CartItem>("carts");
      const { userId } = req.params;

      const items = await collection
        .find({ userId: new ObjectId(userId) })
        .toArray();

      res.json(items);
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    } finally {
      await client.close();
    }
  }
);

type CreateCartItem = Omit<CartItem, "userId">;

cartRouter.post(
  "/users/:userId/cart",
  async (req: Request<GetCartParams, {}, CreateCartItem>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<CartItem>("carts");
      const { userId } = req.params;
      const { product, quantity } = req.body;

      const item = await collection.findOne({
        userId: new ObjectId(userId),
        product,
        quantity,
      });

      if (!item) {
        const newItem = await collection.insertOne({
          userId: new ObjectId(userId),
          product,
          quantity,
        });

        res.status(200).json(newItem);
      } else {
        const updatedItem = await collection.replaceOne(item, {
          ...item,
          quantity: item.quantity + 1,
        });

        res.status(200).json(updatedItem);
      }
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    } finally {
      await client.close();
    }
  }
);

type UpdateCartParams = {
  userId: string;
  productId: string;
};

type UpdateCartItem = Omit<CartItem, "userId">;

cartRouter.patch(
  "/users/:userId/cart/:productId",
  async (
    req: Request<UpdateCartParams, CartItem, CreateCartItem>,
    res: Response
  ) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<CartItem>("carts");
      const { userId, productId } = req.params;
      const { quantity } = req.body;

      const product = await collection.findOne({
        userId: new ObjectId(userId),
        product: { _id: new ObjectId(productId) },
      });

      if (!product) {
        res.status(404).end();
        return;
      }

      const item = await collection.replaceOne(product, {
        ...product,
        quantity,
      });

      res.status(200).json(item);
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    } finally {
      await client.close();
    }
  }
);

type DeleteCartParams = {
  userId: string;
  productId: string;
};

cartRouter.delete(
  "/users/:userId/cart/:productId",
  async (req: Request<DeleteCartParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<CartItem>("carts");
      const { userId, productId } = req.params;

      const product = await collection.findOne({
        userId: new ObjectId(userId),
        product: { _id: new ObjectId(productId) },
      });

      if (!product) {
        res.status(404).end();
        return;
      }

      await collection.deleteOne(product);

      res.status(204).end();
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    } finally {
      await client.close();
    }
  }
);
