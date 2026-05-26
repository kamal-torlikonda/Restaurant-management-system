const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");

router.post("/login", async(req, res) => {

    const admin = await Admin.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(admin){
        res.json({success:true});
    } else {
        res.json({success:false});
    }
});

module.exports = router;