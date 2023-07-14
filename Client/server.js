const express = require('express');
const path = require('path');

const app = express();

// Serve your React app at the root path
app.use(express.static(path.join(__dirname, 'build')));

// Create a new route for the Express app
app.get('/design', (req, res) => {
  // Serve a separate HTML file or content at this route
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
