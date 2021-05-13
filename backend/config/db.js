var mongoose = require('mongoose');

//Set up default mongoose connection
/*var mongoDB = 'mongodb://127.0.0.1/SweetAmbition';*/


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const connectDB= async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline)
    }catch (error)
    {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
module.exports=connectDB