const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Star_Foods:ptzyaoKqyRpUWPzP@cluster0.rpi1p.mongodb.net/Starfoods?retryWrites=true&w=majority"
const connectToMongo =  async () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log(" Star_foods database is Connected");
    })
}
module.exports = connectToMongo;