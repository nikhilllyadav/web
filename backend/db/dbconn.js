const mongoose = require('mongoose');

// const mongoDB = process.env.MONGODB_URI;/
const mongoDB = "mongodb+srv://nikhilyadav5347:nikhil123@cluster0.wugygur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log(mongoDB);
console.log(process.env.PORT);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() => console.log("Mongodb connected successfully..."))
.catch((err) => console.log(err));

module.exports = mongoose;