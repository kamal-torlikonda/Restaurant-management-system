const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const userRoutes =
require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
"mongodb+srv://kamal:<db_password>@cluster0.crdi9ny.mongodb.net/?appName=Cluster0"
)

.then(()=>{

console.log("MongoDB Connected");

})

.catch((err)=>{

console.log(err);

});

/* USER ROUTES */

app.use("/users",userRoutes);

/* ORDER SCHEMA */

const orderSchema = new mongoose.Schema({

items:Array,

totalPrice:Number,

createdAt:{
type:Date,
default:Date.now
}

});

const Order =
mongoose.model("orders",orderSchema);

/* FOOD SCHEMA */

const foodSchema = new mongoose.Schema({

name:String,

price:Number

});

const Food =
mongoose.model("foods",foodSchema);

/* SAVE ORDER */

app.post("/orders",async(req,res)=>{

try{

const order =
new Order(req.body);

await order.save();

res.json({

message:
"Order Saved Successfully"

});

}catch(err){

res.status(500).json(err);
}

});

/* GET ORDERS */

app.get("/orders",async(req,res)=>{

const orders =
await Order.find();

res.json(orders);

});

/* ADD FOOD */

app.post("/foods",async(req,res)=>{

try{

const food =
new Food(req.body);

await food.save();

res.json({

message:
"Food Added Successfully"

});

}catch(err){

res.status(500).json(err);
}

});

/* SERVER */

app.listen(5000,()=>{

console.log(
"Server Running On Port 5000"
);

});