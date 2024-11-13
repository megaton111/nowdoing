const axios = require('axios');

exports.handler = async (event) => {
  const { query } = event.queryStringParameters;
  
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/blog.json', {
      params: {
        query,
        display: 10,
        start: 1,
        sort: 'sim'
      },
      headers: {
        'X-Naver-Client-Id': process.env.CLIENTID,
        'X-Naver-Client-Secret': process.env.CLIENTSECRET,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};