const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(cors());

// MySQL configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'carl',
  password: 'surface118',
  database: 'songsuggestapp'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define routes

// Get users from the database
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error retrieving users:', error);
      res.sendStatus(500); // Send a 500 Internal Server Error response
      return;
    }
    
    // Extract the necessary data from the results
    const users = results.map((row) => {
      return {
        userName: row.user_name,
        userID: row.user_id
      };
    });
    
    res.json(users);
  });
});

// Insert new user into the database
app.post('/users', (req, res) => {
  console.log('Received request body:', req.body);
  const { userName } = req.body;
  console.log("Received user name:",userName);
  if (!userName) {
    res.status(400).json({ error: 'User name is required' });
    return;
  }
  
  connection.query('INSERT INTO users (user_name) VALUES (?)', [userName], (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'An error occurred while inserting the user' });
      return;
    }
    res.status(201).json({ message: 'User added successfully' });  });
});


// Get the posts from the database
app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error('Error retrieving posts:', error);
      res.sendStatus(500); // Send a 500 Internal Server Error response
      return;
    }
    
    // Extract the necessary data from the results
    const posts = results.map((row) => {
      return {
        postID: row.id,
        title: row.title,
        artist: row.artist,
        description: row.description,
        userID: row.user_id
      };
    });
    
    res.json(posts);
  });
});

// Insert new post into the database
app.post('/posts', (req, res) => {
  const { title, artist, description, user_id } = req.body;
  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  connection.query(
    'INSERT INTO posts (title, artist, description, user_id) VALUES (?, ?, ?, ?)',
    [title, artist, description, user_id],
    (error, results) => {
      if (error) {
        console.error('Error inserting post:', error);
        res.status(500).json({ error: 'An error occurred while inserting the post' });
        return;
      }
      res.status(201).json({ message: 'Post added successfully' });
    }
  );
});



// Handle other routes
app.use((req, res) => {
  res.sendStatus(404); // Send a 404 Not Found response
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Internal Server Error:', err);
  res.sendStatus(500); // Send a 500 Internal Server Error response
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
