const express = require('express');
const cors = require('cors');

const app = express();

// Set up CORS middleware
app.use(cors({
  origin: 'http://ka1anda.github.io',
}));

// Rest of your application code...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
