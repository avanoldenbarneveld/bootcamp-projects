const { check } = require("express-validator");
const { validateResultHtml } = require("../middlewares/validators");

const loginParamsValidator = [
  check("email").exists().isEmail().withMessage("A valid email is required"),  // ✅ Corrected
  check("password").exists().notEmpty().withMessage("Password is required"),
  (req, res, next) => {
    validateResultHtml(req, res, next);
  },
];

module.exports = {
  loginParamsValidator,
};
