const express = require('express');
const cors = require('cors');

const eventRoutes = require('./routes/event.routes');

const app = express();

app.use(cors());
app.use(express.json()); // <-- REQUIRED for POST JSON

app.use('/api/events', eventRoutes);

app.get('/health', (_, res) => res.send('OK'));

module.exports = app;
