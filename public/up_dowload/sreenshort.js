const axios = require('axios');

exports.name = '/capwall/:uid/:cookies';
exports.index = async (req, res, next) => {
    try {
        const { uid, cookies } = req.params;
        const options = {
            method: 'GET',
            url: `https://facebook.com/${uid}/`,
            headers: {
                'authority': 'business.facebook.com',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-language': 'en-US,en;q=0.9',
                'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': "Windows",
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'Cookie': cookies
            }
        };
        const response = await axios(options);
        // Trả về dữ liệu JSON thay vì HTML
        res.json({ data: response.data });
    } catch (error) {
        // Trả về lỗi dưới dạng JSON
        res.status(500).json({ error: error.message });
    }
};
