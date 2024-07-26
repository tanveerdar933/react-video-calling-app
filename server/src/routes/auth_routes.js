const express = require("express");
const { generateToken } = require("../controllers/auth_controller");
const router = express.Router();

router.post("/gen_token", generateToken);

module.exports = router;