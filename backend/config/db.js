const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config();
const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("DataBase Connected");        
    }
    catch(error) {
        console.error("Mongodb connection error: ", error);
        process.exit(1);    
    }
};
module.exports = connectdb;
