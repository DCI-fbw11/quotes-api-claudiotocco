const Quote = require("../models/quote");
const { noQuotes } = require("../helpers/errorMessage");

module.exports = {
  //get all current quotes
  getAllQuotes: async (req, res, next) => {
    try {
      const quotesList = await Quote.find({});
      if (!quoteList) {
        createError(400, noQuotes);
      } else {
        res.locals.response = Object.assign({}, res.locals.response || {}, {
          quote: quotesList
        });
      }
    } catch (error) {
      next(error);
    }
    next();
  }
};
