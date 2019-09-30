const express = require("express");

//Routes
const Home = require('./routes/Home');
const About = require('./routes/About');
const Contact = require('./routes/Contact');

const PORT = 3000;
const app = express();

app.use(Home);
app.use(About);
app.use(Contact);



app.listen(PORT);