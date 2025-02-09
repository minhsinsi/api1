exports.name = '/bard';
exports.index = async (req, res, next) => {
  try {
    const axios = require('axios');
    const query = req.query.q;
    const url = 'https://useblackbox.io/chat-request-v4';
    const data = {
      textInput: query,
      allMessages: [{ user: query }],
      stream: '',
      clickedContinue: false,
    };
    
    const response = await axios.post(url, data);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      return res.status(error.response.status).json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu' });
    } else if (error.request) {
      return res.status(500).json({ error: 'Có lỗi xảy ra khi gửi yêu cầu' });
    } else {
      return res.status(500).json({ error: 'Có lỗi xảy ra' });
    }
  }
};
