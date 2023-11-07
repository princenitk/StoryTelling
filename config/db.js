const mongoose = require('mongoose');
// connection to mongodb starts
const DB = process.env.MONGO_URI;
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDb connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}; 

module.exports = connectDB;

// connection to mongodb ends