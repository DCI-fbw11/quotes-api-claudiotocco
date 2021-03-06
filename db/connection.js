const mongoose = require("mongoose");

const { NODE_ENV } = process.env;

const dbPaths = {
  development: "quotes",
  test: "quotes-test"
};

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    return mongoose.connect("mongodb://127.0.0.1/" + dbPaths[NODE_ENV], {
      useNewUrlParser: true
    });
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};
