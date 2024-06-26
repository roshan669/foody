
const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully");
        const foodCategory=await mongoose.connection.db.collection("foodCategory");
        const fetched_data=await mongoose.connection.db.collection("fooditems");
        const fetchData = async () => {
            try {
                 const data=await fetched_data.find({}).toArray();
                const data1=await foodCategory.find({}).toArray();
               
                global.food_items = data;
                global.foodCategory = data1;

                
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }

   
};

module.exports = mongoDB;
