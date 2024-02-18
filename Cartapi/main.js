"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const productRouter_1 = require("./productRouter");
const userRouter_1 = require("./userRouter");
const cartRouter_1 = require("./cartRouter");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(productRouter_1.productRouter);
app.use(userRouter_1.userRouter);
app.use(cartRouter_1.cartRouter);
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
