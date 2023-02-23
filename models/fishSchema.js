const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
	Habitat: String,
	'Image Gallery': [
		{
			src: String,
		},
	],
	Location: String,
	'Noaa Fisheries Region': String,
	Population: String,
	'Population Status': String,
	'Scientific Name': String,
	'Species Aliases': String,
	'Species Illustration Photo': [],
});
