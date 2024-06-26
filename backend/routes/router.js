import express from "express";

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

router.post("/usuario", (req, res) => {
    res.send("Hello World desde el usuarios!");
})



export default router
