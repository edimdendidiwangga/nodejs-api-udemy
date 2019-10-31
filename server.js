const express = require('express');
const dotenv = require('dotenv');

// Load env file
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('X-Powered-By', 'Node.js');
//   res.end(
//     JSON.stringify({
//       success: true,
//       data: todos
//     })
//   );
//   res.write('Hello')
//   res.end()
// });

app.listen(PORT, () => console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`));