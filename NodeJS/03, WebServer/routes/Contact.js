const express = require("express");
const router = express();

router.get("/contact", (req,res) =>{
    res.send("<h1>Contact us</h1>");
})

module.exports = router;

