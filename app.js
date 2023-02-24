// Dependencies //

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Temporary
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB, () => {
	console.log('The connection with mongod is established');
});
