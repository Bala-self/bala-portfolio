
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://bala:bala9384@ac-9m5lmdw-shard-00-00.iyr8c6m.mongodb.net:27017,ac-9m5lmdw-shard-00-01.iyr8c6m.mongodb.net:27017,ac-9m5lmdw-shard-00-02.iyr8c6m.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkry77-shard-0&authSource=admin&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'balakrishnan.code@gmail.com',
        pass: 'rjdu phba vzsb btou'
    }
});

// Contact schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Contact Route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'balakrishnan.code@gmail.com',
        replyTo: email,
        to: 'balakrishnan.code@gmail.com',
        subject: `Contact Form: ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    let emailSent = false;
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        emailSent = true;
    } catch (emailError) {
        console.error('Error sending email:', emailError);
    }

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.send({ message: 'success' });
    } catch (error) {
        console.error('Error saving contact to DB:', error);
        if (emailSent) {
            res.send({ message: 'success', warning: 'DB save failed' });
        } else {
            res.status(500).send({ message: 'error processing request' });
        }
    }
});

// Blog schema
const blogSchema = new mongoose.Schema({
    subject: String,
    text: String,
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// Admin UID 
const ADMIN_UID = "2miqxfYbuqTYrCxI76z5EAlNkn62";

// Middleware to check admin
function checkAdmin(req, res, next) {
    const { uid } = req.body;
    if (uid !== ADMIN_UID) {
        return res.status(403).json({ message: "Forbidden: Admin only" });
    }
    next();
}

// Routes
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching blogs' });
    }
});

app.post('/blogs', checkAdmin, async (req, res) => {
    try {
        const { subject, text } = req.body;
        const newBlog = new Blog({ subject, text });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).send({ message: 'Error creating blog' });
    }
});

app.put('/blogs/:id/like', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send({ message: 'Blog not found' });
        blog.likes += 1;
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).send({ message: 'Error liking blog' });
    }
});

app.delete('/blogs/:id', checkAdmin, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).send({ message: 'Blog not found' });
        res.status(200).send({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting blog' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

