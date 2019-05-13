const express = require("express");
const apiRouter = express.Router({ strict: true });

//Middleware

//Helpers
const sendJsonResp = require("../helpers/sendJsonResp");

//Controller functions
const { getAllQuotes } = require("../controller/quote");

//Route Config
const apiRoutes = {
  getAllQuotes: "/quotes",
  getQuoteByID: "/quotes/:id",
  postQuote: "/quotes",
  updateQuoteById: "/quotes/:id",
  deleteBookmarkById: "/quotes/:id",
  batchDeleteBookmarks: "/quotes/delete/",
  falseRoute: "/quotes/",
  all: "*"
};

// Routes showing users possible endpoints for routes
apiRouter.get("/", (req, res) => {
  res.json({ availableRoutes: apiRoutes });
});

// Bad Requests Route

// Get
apiRouter.get(apiRoutes.getAllQuotes, getAllQuotes);
// Post

// Update

// Delete

//Batch Delete

apiRouter.use(sendJsonResp);

module.exports = { apiRouter, apiRoutes };
