import { Router, Request, Response } from "express";
import { client } from "./db";
import { Filter, ObjectId } from "mongodb";

export const productRouter = Router();

export type Product = {
  name: string;
  price: number;
  photoUrl: string;
};

type GetProductParams = {
  maxPrice?: number;
  includes?: string;
  limit?: number;
};

/**
 * GET A list of items in the cart
 */
productRouter.get(
  "/product",
  async (req: Request<{}, Product[], {}, GetProductParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("product");
      const params = req.query;

      // Query
      const query: Filter<Product> = {};

      if (params?.maxPrice) {
        query.price = { $lte: params.maxPrice };
      }

      if (params?.includes) {
        query.name = { $regex: `^${params.includes}` };
      }

      const items = await collection
        .find(query, { limit: params?.limit })
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

type GetProductByIdParams = {
  id: string;
};

productRouter.get(
  "/product/:id",
  async (req: Request<GetProductByIdParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("product");
      const id = req.params.id;

      // Lookup cart item by id
      const item = await collection.findOne({ _id: new ObjectId(id) });

      // If no item is found, return an error with 404 code
      if (!item) {
        res.status(404).send("ID Not Found");
      }

      // Return response
      res.status(200).json(item);
    } catch (e) {
      console.error(e);
      res.status(404).send("ID Not Found");
    } finally {
      await client.close();
    }
  }
);

type CreateCartItem = Required<Product>;

productRouter.post(
  "/product",
  async (req: Request<{}, {}, CreateCartItem>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("product");

      // Get request body (product, price, quantity)
      const { name, price, photoUrl } = req.body;

      // Create new product in the collection
      await collection.insertOne({
        name,
        price,
        photoUrl,
      });

      // Return a 201 status
      res.status(201).end();
    } catch (e) {
      console.error(e);
      res.status(400).end();
    } finally {
      await client.close();
    }
  }
);

type UpdateCartItem = Partial<Product>;

productRouter.put(
  "/product/:id",
  async (
    req: Request<GetProductByIdParams, {}, UpdateCartItem>,
    res: Response
  ) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("product");

      // Get request body (product, price, quantity)
      const { id } = req.params;
      const { name, price, photoUrl } = req.body;

      // Update product in the collection
      await collection.findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            name,
            price,
            photoUrl,
          },
        }
      );

      // Return a 201 status
      res.status(200).end();
    } catch (e) {
      console.error(e);
      res.status(400).end();
    } finally {
      await client.close();
    }
  }
);

productRouter.delete(
  "/product/:id",
  async (req: Request<GetProductByIdParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("product");

      const { id } = req.params;

      // Delete product in the collection
      await collection.deleteOne({ _id: new ObjectId(id) });

      // Return a 201 status
      res.status(204).end();
    } catch (e) {
      console.error(e);
      res.status(400).end();
    } finally {
      await client.close();
    }
  }
);
