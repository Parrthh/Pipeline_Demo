const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    console.log('Received message: ', message);
    res.status(200).json({ status: 'Message Received' });
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});