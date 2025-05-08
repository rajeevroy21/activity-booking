const mongoose = require('mongoose');
const Activity = require('../models/Activity');
require('dotenv').config();

const sampleActivities = [
  {
    title: "Cricket Match",
    description: "Join us for a friendly cricket match at Central Park",
    location: "Central Park, New York",
    dateTime: new Date("2024-03-20T14:00:00Z")
  },
  {
    title: "Movie Night",
    description: "Watch the latest blockbuster with friends",
    location: "City Cinema, Downtown",
    dateTime: new Date("2024-03-21T19:00:00Z")
  },
  {
    title: "Football Match",
    description: "5-a-side football match for all skill levels",
    location: "Sports Complex, West Side",
    dateTime: new Date("2024-03-22T16:00:00Z")
  }
];

const seedActivities = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing activities
    await Activity.deleteMany({});
    console.log('Cleared existing activities');

    // Insert new activities
    const activities = await Activity.insertMany(sampleActivities);
    console.log('Added sample activities:', activities);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding activities:', error);
    process.exit(1);
  }
};

// Run the seeder
seedActivities(); 