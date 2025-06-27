const mongoose = require('mongoose');
const User = require('./userModel');
const Property = require('./propertyModel');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function initializeDb() {
  
  await Property.insertMany([
    {
      title: 'Classic Literature Collection',
      description: 'A collection of timeless literary works by famous authors.',
      price: 150,
      location: 'Shelf A',
      type: 'Book'
    },
    {
      title: 'Modern Sci-Fi Adventures',
      description: 'Explore new worlds and adventures in modern science fiction.',
      price: 200,
      location: 'Shelf B',
      type: 'Book'
    }
  ]);

  console.log('Database initialized with sample books');
  process.exit(0);
}

initializeDb();
