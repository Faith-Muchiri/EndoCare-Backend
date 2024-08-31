const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Use environment variable or fallback to default URI
        const uri = process.env.MONGODB_URI || "mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

        // Connect to MongoDB using the URI
        await mongoose.connect(uri);

        console.log('MongoDB Connected Successfully...');
    } catch (err) {
        // Log the error message and exit the process with failure code
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
