import express from "express";
import { addProduct } from "../models/queries.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World desde el server!");
});

router.get("/test", (req, res) => {
    res.send("Hello World desde test!");
})

router.get('/usuario', (req, res) => {
    res.send("Hello World desde el usuarios!")
})

router.post("/product", async(req, res) => {
    const { name, description, price, stock } = req.body

    await addProduct(name, description, price, stock)

    res.send("Product added")
})



export default router
