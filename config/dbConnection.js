const mongoose = require("mongoose");


const connectToDB =  async () =>{
    try {
        const url = process.env.URL;
        await mongoose.connect(url);
        console.log("Connected Sucessfully!");  
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;
