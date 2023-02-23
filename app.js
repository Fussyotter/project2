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
mongoose.connect(
	'mongodb+srv://admin:vI6oHFn4IVdSJmq7@cluster0.jh9v9oe.mongodb.net/sample_geospatial?retryWrites=true&w=majority',
	() => {
		console.log('The connection with mongod is established');
	}
);
