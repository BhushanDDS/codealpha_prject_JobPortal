const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require('./connectDB.js')
dotenv.config();
const userRoutes = require('./routes/user');
const jobRoutes = require('./routes/job');
const applicationRoutes = require('./routes/application');

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running`);
        });
    })
    .catch((err) => {
        console.log("Server Connection failed", err);
    });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded())
app.use('api/v1/users', userRoutes);
app.use('api/v1/jobs', jobRoutes);
app.use('api/v1/applications', applicationRoutes);