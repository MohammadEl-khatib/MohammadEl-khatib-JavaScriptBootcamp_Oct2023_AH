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
exports.cartRouter = void 0;
const express_1 = require("express");
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
exports.cartRouter = (0, express_1.Router)();
exports.cartRouter.get("/users/:userId/cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("carts");
        const { userId } = req.params;
        const items = yield collection
            .find({ userId: new mongodb_1.ObjectId(userId) })
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
exports.cartRouter.post("/users/:userId/cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("carts");
        const { userId } = req.params;
        const { product, quantity } = req.body;
        const item = yield collection.findOne({
            userId: new mongodb_1.ObjectId(userId),
            product,
            quantity,
        });
        if (!item) {
            const newItem = yield collection.insertOne({
                userId: new mongodb_1.ObjectId(userId),
                product,
                quantity,
            });
            res.status(200).json(newItem);
        }
        else {
            const updatedItem = yield collection.replaceOne(item, Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 }));
            res.status(200).json(updatedItem);
        }
    }
    catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.cartRouter.patch("/users/:userId/cart/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("carts");
        const { userId, productId } = req.params;
        const { quantity } = req.body;
        const product = yield collection.findOne({
            userId: new mongodb_1.ObjectId(userId),
            product: { _id: new mongodb_1.ObjectId(productId) },
        });
        if (!product) {
            res.status(404).end();
            return;
        }
        const item = yield collection.replaceOne(product, Object.assign(Object.assign({}, product), { quantity }));
        res.status(200).json(item);
    }
    catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
    finally {
        yield db_1.client.close();
    }
}));
exports.cartRouter.delete("/users/:userId/cart/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db_1.client.connect();
        const db = connection.db("ShoppingCart");
        const collection = db.collection("carts");
        const { userId, productId } = req.params;
        const product = yield collection.findOne({
            userId: new mongodb_1.ObjectId(userId),
            product: { _id: new mongodb_1.ObjectId(productId) },
        });
        if (!product) {
            res.status(404).end();
            return;
        }
        yield collection.deleteOne(product);
        res.status(204).end();
    }
    catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
    finally {
        yield db_1.client.close();
    }
}));
