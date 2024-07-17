import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { replyMessage } from './LINE/messageAPI';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Route to handle chatbot messages
app.post('/webhook', async (req: Request, res: Response) => {
    const events = req.body.events;
    const messageEvents = events.filter((event: any) => event.type == "message");
    const messageEvent = messageEvents[0];
    await replyMessage(messageEvent.replyToken, messageEvent.message.text);
    res.status(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});