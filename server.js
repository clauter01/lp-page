const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(morgan('dev'));

let messages = [];

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    messages.push({ name, email, message });
    res.json({ message: 'Thank you for your message!' });
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});