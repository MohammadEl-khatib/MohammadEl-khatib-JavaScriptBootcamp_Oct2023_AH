import express, { Request, Response } from "express";
import { MongoClient, Filter, ObjectId } from "mongodb";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

const client = new MongoClient(
  
);

type Product = {
  product: string;
  price: number;
  quantity: number;
};

type GetCartParams = {
  maxPrice?: number;
  prefix?: string;
  pageSize?: number;
};

/**
 * GET A list of items in the cart
 */
app.get(
  "/cart-items",
  async (req: Request<{}, Product[], {}, GetCartParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("cart");
      const params = req.query;

      // Query
      const query: Filter<Product> = {};

      if (params?.maxPrice) {
        query.price = { $lte: params.maxPrice };
      }

      if (params?.prefix) {
        query.product = { $regex: `^${params.prefix}` };
      }

      const items = await collection
        .find(query, { limit: params?.pageSize })
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

type GetCartItemParams = {
  id: string;
};

app.get(
  "/cart-items/:id",
  async (req: Request<GetCartItemParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("cart");
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

app.post(
  "/cart-items",
  async (req: Request<{}, {}, CreateCartItem>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("cart");

      // Get request body (product, price, quantity)
      const { product, price, quantity } = req.body;

      // Create new product in the collection
      await collection.insertOne({
        product,
        price,
        quantity,
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

app.put(
  "/cart-items/:id",
  async (
    req: Request<GetCartItemParams, {}, UpdateCartItem>,
    res: Response
  ) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("cart");

      // Get request body (product, price, quantity)
      const { id } = req.params;
      const { product, price, quantity } = req.body;

      // Update product in the collection
      await collection.findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            product,
            price,
            quantity,
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

app.delete(
  "/cart-items/:id",
  async (req: Request<GetCartItemParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<Product>("cart");

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

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
