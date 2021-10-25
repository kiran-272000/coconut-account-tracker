const Coconut = require("../models/coconutModel");
const { uuid } = require("uuidv4");
exports.addCoconut = async (req, res) => {
  const data = req.body;
  const newCoconut = await Coconut.create(
    {
      _id: uuid(),
      date: data.date,
      coconut_count: Number(data.coconut_count),
      market_price: Number(data.marketPrice),
      price_per_coconut: Number(data.pricePerCoconut),
    },
    function (err, Coconut) {
      if (err) return res.status(422).send(err);
      res.status(201).json({
        date: Coconut.date,
        coconut_count: Coconut.coconut_count,
        market_price: Coconut.market_price,
        amount: Coconut.amount,
      });
    }
  );
};

exports.yearlyData = async (req, res) => {
  const yearly = await Coconut.aggregate([
    {
      $group: {
        _id: "$year",
        totalcoconut: { $sum: "$coconut_count" },
        totalamount: { $sum: "$amount" },
        avg_price_per_coconut: { $avg: "$price_per_coconut" },
      },
    },
    {
      $addFields: {
        year: "$_id",
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  res.status(200).json({
    yearly,
  });
};
exports.year = async (req, res) => {
  await Coconut.find(
    {
      year: req.params.year,
    },
    function (err, year) {
      if (year.length == 0) {
        return res.status(404).send("No Records found in this year");
      }
      res.status(200).json({
        year,
      });
    }
  );
};
