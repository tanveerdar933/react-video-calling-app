const jsonwebtoken = require('jsonwebtoken');
const { PRIVATE_KEY_PATH } = require('../config/env_exports');
const fs = require('fs');

const generateJWTToken = (privateKey, { id, name, email, avatar, appId, kid, isModerator = false }) => {
  const privateFileKey = fs.readFileSync(PRIVATE_KEY_PATH, 'utf8');
  const now = new Date();
  const jwt = jsonwebtoken.sign({
    aud: 'jitsi',
    context: {
      user: {
        id,
        ...(name && { name }),
        avatar,
        ...(email && { email }),
        moderator: `${isModerator}`
      },
      features: {
        livestreaming: 'false',
        recording: 'true',
        transcription: 'true',
        "outbound-call": 'true'
      }
    },
    iss: 'chat',
    room: '*',
    sub: appId,
    exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
    nbf: (Math.round((new Date()).getTime() / 1000) - 10)
  }, privateFileKey, { algorithm: 'RS256', header: { kid } });

  return jwt;
};

module.exports = {
  generateJWTToken
};