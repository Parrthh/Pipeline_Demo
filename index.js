const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Clean and default-safe CORS for React
app.use(cors({
    origin: 'http://localhost:5173',
}));

// Optional: Handle OPTIONS explicitly (only needed for legacy setups)
app.options('*', cors());

app.use(express.json());

app.post('/api/message', (req, res) => {
    console.log("API hit!");
    console.log("Received:", req.body.message);
    res.status(200).json({ status: 'Message received' });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
