// Dependencies //

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const fishArr = require('./models/fishArr.js');
const fishSchema = require('./models/fishSchema.js');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/fish', (request, response)=> {
	fishSchema.find( (error,allFish) => {
		response.render('index.ejs', {
			fish : allFish 
		})
	})
})

// Temporary
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB, () => {
	console.log('The connection with mongod is established');
});


app.get('/fish/seed', (req, res) => {
	fishSchema.create(fishArr, (error, seedData) => {
		if (error) {
			console.log(error);
		}
		res.send(seedData);
	});
});

app.listen(3000, () => {
	console.log('listening');
});
// app.get('/fish', (req, res) => {
// 	recipeSchema.find({}, (error, recipeIndex) => {
// 		res.render('index.ejs', { data: recipeIndex });
// 	});
// });
