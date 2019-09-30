const express = require("express");
const router = express();
const path = require("path");


router.get("/", (req,res) => {
     res.render("index", {
        title: "Node Pug",
        h1: "Hello pug!",
        name: "Bill"
    });
})

module.exports = router;


