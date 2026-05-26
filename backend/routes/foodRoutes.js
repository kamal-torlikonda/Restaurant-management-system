const express = require("express");
const router = express.Router();

const Food = require("../models/Food");

router.get("/", async(req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

router.post("/", async(req, res) => {

    const food = new Food(req.body);

    await food.save();

    res.json(food);
});

module.exports = router;