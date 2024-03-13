import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import connectDB from './db/index.js';
import cookieParser from 'cookie-parser';

// Initilize App
const app = express();

// Import Routes
import userRoutes from './routes/user.route.js';
import blogRoutes from './routes/blog.route.js';


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
// Routes Middleware
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);


// Connect to Database
connectDB().then(() => {
    app.listen(5000, () => {
        console.log('Server is running on port 5000')
    })
}).catch((error) => {
    console.log('Error connecting to database', error)
})
