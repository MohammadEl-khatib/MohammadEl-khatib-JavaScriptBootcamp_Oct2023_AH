/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { MongoClient } from "mongodb";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
const url = "mongodb+srv://Moe:Modog1972@moe.lgfk2a5.mongodb.net/";
const dbName = "shoutouts";
export const getShoutouts = onRequest(async (request, response) => {
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    // Perform actions on the database object
    console.log("Database:", db.databaseName);
    const collection = db.collection("shoutouts");

    // Find all documents in the collection
    const shoutouts = await collection.find({}).toArray();
    response.send(shoutouts);
    // Example: Insert a document into a collection
    // const collection = db.collection('documents');
    // const insertResult = await collection.insertOne({a: 1});
    // console.log("Inserted document:", insertResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

export const createShoutout = onRequest(async (request, response) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    response.status(405).send('Method Not Allowed');
    return;
  }

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("shoutouts");

    const shoutout = {
      name: request.body.name,
    };

    // Insert the new shoutout into the collection
    const insertResult = await collection.insertOne(shoutout);
    console.log("Inserted shoutout:", insertResult);
    response.status(201).end();
  } catch (error) {
    console.error("Failed to create shoutout:", error);
    response.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});