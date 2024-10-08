const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected Successfully...')
        // console.log(process.env.MONGO_URI)
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;