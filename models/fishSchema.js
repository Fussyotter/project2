const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
    // 4-5 information types
	Habitat: String,
	'Image Gallery': String,
	Location: String,
	// 'Noaa Fisheries Region': String,
	Population: String,
	// 'Population Status': String,
	// 'Scientific Name': String,
	'Species Aliases': String,
    taste: String,
    quote: String,
    'Health benefits': String,
	'Species Illustration Photo': [
        {
            src: String,
        }
    ],
});
