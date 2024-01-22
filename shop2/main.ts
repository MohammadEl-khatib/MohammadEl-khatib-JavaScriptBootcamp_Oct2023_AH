import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { productRouter } from "./productRouter";
import { userRouter } from "./userRouter";
import { cartRouter } from "./cartRouter";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(productRouter);
app.use(userRouter);
app.use(cartRouter);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
