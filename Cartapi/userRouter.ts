import { Router, Request, Response } from "express";
import { client } from "./db";
import { Filter, ObjectId } from "mongodb";

export const userRouter = Router();

type User = {
  displayName: string;
  photoUrl?: string;
  darkTheme: boolean;
};

type GetUserByIdParams = {
  id: string;
};

userRouter.get(
  "/users/:id",
  async (req: Request<GetUserByIdParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<User>("user");
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

type CreateUser = Required<User>;

userRouter.post(
  "/users",
  async (req: Request<{}, {}, CreateUser>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<User>("user");

      // Get request body (product, price, quantity)
      const { displayName, photoUrl, darkTheme } = req.body;

      // Create new product in the collection
      await collection.insertOne({
        displayName,
        photoUrl,
        darkTheme,
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

type UpdateUser = Partial<User>;

userRouter.put(
  "/users/:id",
  async (req: Request<GetUserByIdParams, {}, UpdateUser>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<User>("user");

      // Get request body (product, price, quantity)
      const { id } = req.params;
      const { displayName, photoUrl, darkTheme } = req.body;

      // Update product in the collection
      await collection.findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            displayName,
            photoUrl,
            darkTheme,
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

userRouter.delete(
  "/users/:id",
  async (req: Request<GetUserByIdParams>, res: Response) => {
    try {
      const connection = await client.connect();
      const db = connection.db("ShoppingCart");
      const collection = db.collection<User>("user");

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
