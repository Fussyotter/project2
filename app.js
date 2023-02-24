// Dependencies //

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(methodOverride('_method'));

// Temporary
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB, () => {
	console.log('The connection with mongod is established');
});
