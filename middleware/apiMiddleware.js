const createError = require("../helpers/createError");

exports.isBodyValid = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    createError(
      400,
      "no body found please enter body with field to update bookmark"
    );
  }
  next();
};
