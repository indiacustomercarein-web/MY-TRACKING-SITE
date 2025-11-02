require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/track', async (req, res) => {
    const { trackingId } = req.body;
    if (!trackingId) return res.json({ error: 'નંબર નાખો' });
    res.json({ tracking: { status: 'ટેસ્ટ મોડ - ચાલુ છે!' } });
});

app.listen(3000, () => console.log('http://localhost:3000'));