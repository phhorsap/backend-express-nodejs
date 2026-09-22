const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Express backend is running' });
});

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
