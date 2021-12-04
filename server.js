const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./connection')

const routes = require('./controllers/');

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//routing


//running

app.listen(PORT, () => {
    console.log("server is live")
    sequelize.sync({ force: false })
})