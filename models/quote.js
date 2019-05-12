const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuoteSchema = new Schema({
  quote: {
    type: String,
    maxlength: 150,
    required: true,
    default: "no quote"
  },
  author: {
    type: String,
    maxLength: 50,
    required: true,
    default: "anonymous"
  },
  tag: {
    type: [{ type: String, maxlength: 50 }]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  }
});

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;
