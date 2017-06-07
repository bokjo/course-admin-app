/**
 * Created by bstojchevski on 6/7/2017.
 */
if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
