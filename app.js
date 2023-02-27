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

app.get('/fish', (request, response) => {
	fishSchema.find((error, allFish) => {
		response.render('index.ejs', {
			fish: allFish,
		});
	});
});

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

app.get('/fish', (req, res) => {
	fishSchema.find({}, (error, allFish) => {
		res.render('index.ejs', { fish: allFish });
	});
});

app.get('/fish/:id', (request, response) => {
	fishSchema.findById(request.params.id, (err, foundFish) => {
		response.render('show.ejs', {
			fish: foundFish,
		});
	});
});

// app.get('/new', (request,response) {
// 	response.render('new.ejs')
// })

// app.post('/new', (request, response) => {
// 	fishSchema.create(request.body, (err, newFish) => {
// 		response.redirect('/fish')
// 	})
// })

app.delete('/fish/:id', (request, response) => {
	fishSchema.findByIdAndRemove(request.params.id, (error, fishDelete) => {
		response.redirect('/fish');
	});
});

app.get('fish/:id/edit', (request, response) => {
	fishSchema.findById(request.params.id, (err, fishEdit) => {
		response.render('edit.ejs', {
			fish: fishEdit,
		});
	});
});

app.put('/fish/:id', (request, response) => {
	fishSchema.findByIdAndUpdate(
		request.params.id,
		request.body,
		{ new: true },
		(err, fishEdit) => {
			response.redirect('/fish');
		}
	);
});

app.listen(3000, () => {
	console.log('listening');
});
