import axios from 'axios';

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${channelAccessToken}`
    }
};

export const replyMessage = async (replyToken: string, text: string) => {
    const data = {
        replyToken: replyToken,
        messages: [
            {
                type: 'text',
                text: 'ขอบคุณสำหรับข้อความของเธอนะ ด้านล่างคือข้อความของเธอใช่ไหม'
            },
            {
                type: 'text',
                text: `${text}`
            }
        ]
    };
    try {
        const response = await axios.post('https://api.line.me/v2/bot/message/reply', data, config);
        console.log('Success:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};