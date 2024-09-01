const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');  

dotenv.config();

const app = express();

// Connect to Database
connectDB();

app.use(express.json({ extended: false }));


app.use(cors());  

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/specialists', require('./routes/specialistsRoutes'));
app.use('/api/appointments', require('./routes/appointmentsRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/communities', require('./routes/communityPostRoutes')); 
app.use('/api/diets', require('./routes/dietsRoutes'));
app.use('/api/exercises', require('./routes/exerciseRoutes'));
app.use('/api/medications', require('./routes/medicationsRoutes'));
app.use('/api/stories', require('./routes/storyRoutes'));
app.use('/api/insights', require('./routes/insightRouter'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
