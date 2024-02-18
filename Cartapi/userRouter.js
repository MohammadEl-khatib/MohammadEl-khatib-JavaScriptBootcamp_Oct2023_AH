"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("user");
        const id = req.params.id;
        // Lookup cart item by id
        const item = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
        // If no item is found, return an error with 404 code
        if (!item) {
            res.status(404).send("ID Not Found");
        }
        // Return response
        res.status(200).json(item);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("ID Not Found");
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.userRouter.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("user");
        // Get request body (product, price, quantity)
        const { displayName, photoUrl, darkTheme } = req.body;
        // Create new product in the collection
        yield collection.insertOne({
            displayName,
            photoUrl,
            darkTheme,
        });
        // Return a 201 status
        res.status(201).end();
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.userRouter.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("user");
        // Get request body (product, price, quantity)
        const { id } = req.params;
        const { displayName, photoUrl, darkTheme } = req.body;
        // Update product in the collection
        yield collection.findOneAndUpdate({
            _id: new mongodb_1.ObjectId(id),
        }, {
            $set: {
                displayName,
                photoUrl,
                darkTheme,
            },
        });
        // Return a 201 status
        res.status(200).end();
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.userRouter.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("user");
        const { id } = req.params;
        // Delete product in the collection
        yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        // Return a 201 status
        res.status(204).end();
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
    finally {
        yield db_1.client.close();
    }
}));
