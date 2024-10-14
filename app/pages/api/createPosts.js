// pages/api/createPost.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Set up your MongoDB URI in environment variables
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const database = client.db('your_database_name');
      const collection = database.collection('posts');

      const newPost = {
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        date: req.body.date,
        content: req.body.content,
      };

      await collection.insertOne(newPost);

      res.status(200).json({ message: 'Post created successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create post' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
