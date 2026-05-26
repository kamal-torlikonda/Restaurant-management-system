const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/register", async(req,res)=>{

try{

const {name,email,password} = req.body;

const newUser = new User({

name,
email,
password
});

await newUser.save();

res.status(201).json({

message:"Registration Successful"

});

}
catch(error){

res.status(500).json({

message:"Registration Failed"

});
}

});

router.post("/login", async(req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({

email,
password
});

if(user){

res.json({

success:true,

message:"Login Successful"

});
}
else{

res.json({

success:false,

message:"Invalid Credentials"

});
}

}
catch(error){

res.status(500).json({

message:"Server Error"

});
}

});

module.exports = router;