const jsonwebtoken = require('jsonwebtoken');

const generateJWTToken = (privateKey, { id, name, email, avatar, appId, kid, isModerator = false }) => {
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
        recording: 'false',
        transcription: 'true',
        "outbound-call": 'true'
      }
    },
    iss: 'chat',
    room: '*',
    sub: appId,
    exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
    nbf: (Math.round((new Date()).getTime() / 1000) - 10)
  }, privateKey, { algorithm: 'RS256', header: { kid } });

  return jwt;
};

module.exports = {
  generateJWTToken
};