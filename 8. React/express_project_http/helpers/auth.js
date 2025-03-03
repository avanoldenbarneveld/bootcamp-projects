const jwt = require("jsonwebtoken");
const JWT_SECRET = "ClaveMegaSecreta";
const bcrypt = require("bcrypt");
const salt = 10;

const hashPassword = async (passwordPlain) => {
  return await bcrypt.hash(passwordPlain, salt);
};

const comparePasswords = async (passwordPlain, hash) => {
  const isValid = await bcrypt.compare(passwordPlain, hash);
  console.log("Comparing passwords:", passwordPlain, hash, "=>", isValid);
  return isValid;
};

const genToken = (data) => {
  return jwt.sign(data, JWT_SECRET, {
    expiresIn: "50m",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  hashPassword,
  comparePasswords,
  genToken,
  verifyToken,
};
