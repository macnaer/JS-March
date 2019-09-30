const express = require("express");
const router = express();

router.get("/about", (req,res) =>{
    res.send("<h1>About us</h1>");
})

module.exports = router;

