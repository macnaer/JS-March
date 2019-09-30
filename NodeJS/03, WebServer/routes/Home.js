const express = require("express");
const router = express();

router.get("/", (req,res) => {
    res.send("<h1>Hello express</h1>");
})

module.exports = router;


