const { generateJWTToken } = require('../services/jwt_services');
const { PRIVATE_KEY, API_KEY, APP_ID, SERVER_PUBLIC_STATIC } = require('../config/env_exports');
const { v4: uuidv4 } = require('uuid');

const getJWTToken = async (req, res) => {
  try {
    const { name, email, isModerator } = req.body;
    const token = generateJWTToken(PRIVATE_KEY, {
      id: uuidv4(),
      ...(name && { name }),
      ...(email && { email }),
      // avatar: req.body.avatar,
      avatar: `${SERVER_PUBLIC_STATIC}/man_avatar.png`,
      appId: APP_ID,
      kid: API_KEY,
      ...(isModerator && { isModerator }),
    });
    console.log(token);
    res.json({ token });
  }
  catch (error) {
    res.status(500).json({ error: 'Error generating token', message: error?.message, stack: error?.stack });
  }
};

module.exports = {
  getJWTToken
};