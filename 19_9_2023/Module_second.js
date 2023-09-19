// Module-second.js
var a = require("./Module-first");
var module2 = {
  y: function () {
    a.y();
  },
};
