const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

  // Create empty array to hold the users
  const users = [];

  // Loop 5 times -- add thoughts to the thought array
  for (let i = 0; i < 5; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(5);
    const username = getRandomName();
    const email = `${username}@gmail.com`
    const friends = getRandomName();

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add thoughts to the collection and await the results
  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
