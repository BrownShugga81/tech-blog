const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./connection')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

//routing


//running

app.listen(PORT, () => {
    console.log("we're doing it live")
    sequelize.sync({ force: false })
})