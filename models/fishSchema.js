const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
	// 4-5 information types
	'Species Name': String,
	Habitat: String,

	imageGallery: [{ img: String }],
	Location: String,
	// 'Noaa Fisheries Region': String,
	Population: String,
	// 'Population Status': String,
	// 'Scientific Name': String,
	SpeciesAliases: String,
	Taste: String,
	Texture: String,
	'Health Benefits': String,
	'Species Illustration Photo': [{ src: String }],
});

const fishCollection = mongoose.model('fish', fishSchema);
module.exports = fishCollection;
