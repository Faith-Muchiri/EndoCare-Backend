const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Use environment variable or fallback to default URI
        const uri = process.env.MONGO_URI || "mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";
        
        await mongoose.connect(uri);
        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
