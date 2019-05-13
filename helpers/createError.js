const createError = (statusCode, errorMessage) => {
  let err = new Error(errorMessage);
  err.statusCode = statusCode;
};

module.exports = createError;
