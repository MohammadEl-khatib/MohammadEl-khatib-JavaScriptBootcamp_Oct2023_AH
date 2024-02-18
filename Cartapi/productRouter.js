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
exports.productRouter = void 0;
const express_1 = require("express");
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
exports.productRouter = (0, express_1.Router)();
/**
 * GET A list of items in the cart
 */
exports.productRouter.get("/product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("product");
        const params = req.query;
        // Query
        const query = {};
        if (params === null || params === void 0 ? void 0 : params.maxPrice) {
            query.price = { $lte: params.maxPrice };
        }
        if (params === null || params === void 0 ? void 0 : params.includes) {
            query.name = { $regex: `^${params.includes}` };
        }
        const items = yield collection
            .find(query, { limit: params === null || params === void 0 ? void 0 : params.limit })
            .toArray();
        res.json(items);
    }
    catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.productRouter.get("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("product");
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
exports.productRouter.post("/product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("product");
        // Get request body (product, price, quantity)
        const { name, price, photoUrl } = req.body;
        // Create new product in the collection
        yield collection.insertOne({
            name,
            price,
            photoUrl,
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
exports.productRouter.put("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("product");
        // Get request body (product, price, quantity)
        const { id } = req.params;
        const { name, price, photoUrl } = req.body;
        // Update product in the collection
        yield collection.findOneAndUpdate({
            _id: new mongodb_1.ObjectId(id),
        }, {
            $set: {
                name,
                price,
                photoUrl,
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
exports.productRouter.delete("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("product");
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
