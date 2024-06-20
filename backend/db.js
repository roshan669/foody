const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://dhamiroshan730:foody@cluster0.1s2db0v.mongodb.net/';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = mongoDB;
