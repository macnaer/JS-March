const express = require("express");
const path = require("path");

//Routes
const Home = require('./routes/Home');
const About = require('./routes/About');
const Contact = require('./routes/Contact');

const PORT = 3000;
const app = express();

app.set("views", "views");
app.set('view engine', "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(Home);
app.use(About);
app.use(Contact);


app.listen(PORT);