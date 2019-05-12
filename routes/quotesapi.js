const express = require("express");
const apiRouter = express.Router({ strict: true });

//Middleware

//Helpers

//Controller functions
const { getBookmarks } = require("../controller/quote");

//Route Config
const apiRoutes = {
  getAllQuotes: "/quotes",
  getQuoteByID: "/quotes/:id",
  postQuote: "/quotes",
  updateQuoteById: "/quotes/:id",
  deleteBookmarkById: "/quotes/:id",
  batchDeleteBookmarks: "/quotes/delete/",
  falseRoute: "/quotes/"
};

// Routes showing users possible endpoints for routes
apiRouter.get("/", (req, res) => {
  res.json({ availableRoutes: apiRoutes });
});

// Bad Requests Route

// Get

// Post

// Update

// Delete

//Batch Delete
