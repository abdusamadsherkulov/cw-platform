import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 4000;

app.get('/health', (req, res) => {
    res.json({status: 'ok'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});