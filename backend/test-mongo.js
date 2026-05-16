const mongoose = require('mongoose');

async function testConnection() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect('mongodb://bala:bala9384@ac-9m5lmdw-shard-00-00.iyr8c6m.mongodb.net:27017,ac-9m5lmdw-shard-00-01.iyr8c6m.mongodb.net:27017,ac-9m5lmdw-shard-00-02.iyr8c6m.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkry77-shard-0&authSource=admin&appName=Cluster0');
        console.log('Connected to MongoDB');
        
        const blogSchema = new mongoose.Schema({
            subject: String,
            text: String
        });
        const Blog = mongoose.model('Blog', blogSchema);
        
        console.log('Fetching blogs...');
        const blogs = await Blog.find();
        console.log('Blogs fetched:', blogs);
    } catch (error) {
        console.error('Test script error:', error);
    } finally {
        mongoose.disconnect();
    }
}

testConnection();
