const {User} = require("../models")
const userInfo = require("./user-seed.json")

const sequelize = require("../connection")

const seedDB = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userInfo);
    console.log("users seeded")
}

seedDB()