const mongoose = require("mongoose");

const coconutSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    coconut_count: {
      type: Number,
      required: true,
    },
    market_price: {
      type: Number,
      required: true,
    },
    price_per_coconut: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { versionKey: false }
);

coconutSchema.pre("save", function (next) {
  var parts = this.date.split("-");
  this.year = parts[0];
  var datestring = new Date(this.date);
  this.date = datestring.toDateString();
  this.amount = this.coconut_count * this.price_per_coconut;
  next();
});

const Coconut = mongoose.model("Coconut", coconutSchema);

module.exports = Coconut;
