const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }


  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 5 times -- add thoughts to the thought array
  for (let i = 0; i < 20; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thoughtText = getRandomThoughts();
    const createdAt = `January 5, 2024`;
    const username = getRandomName();
    const reactions = [];

    thoughts.push({
      thoughtText,
      createdAt,
      username,
      reactions,
    });
  }

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
