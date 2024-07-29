const express = require("express");
const { getJWTToken } = require("../controllers/auth_controller");
const router = express.Router();

router.post("/get_jwt_token", getJWTToken);

module.exports = router;