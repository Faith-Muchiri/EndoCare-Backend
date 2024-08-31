const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect("mongodb://127.0.0.1:27017/endocare");
        console.log('MongoDB Connected Successfully...')
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;