const Coconut = require("../coconutModel");
const { uuid } = require("uuidv4");
exports.addCoconut = async (req, res) => {
  const data = req.body;
  //var mydate = new Date(data.date);
  const newCoconut = await Coconut.create(
    {
      _id: uuid(),
      date: data.date,
      coconut_count: data.coconut_count,
      market_price: data.marketPrice,
      price_per_coconut: data.pricePerCoconut,
    },
    function (err, Coconut) {
      if (err) return res.status(302).send(err);
      res.status(200).json({
        message: "Data Submmited Succesfully",
        coconutCount: Coconut.coconut_count,
        amount: Coconut.amount,
        // id: Coconut._id,
      });
    }
  );
};

exports.yearlyData = async (req, res) => {
  console.log("hi");
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
  res.status(200).send({
    status: "Success",
    yearly: yearly,
  });
};
exports.year = async (req, res) => {
  await Coconut.find(
    {
      year: req.params.year,
    },
    function (err, docs) {
      if (docs.length == 0) {
        return res.status(404).send("No Records found in this year");
      }
      res.status(200).send(docs);
    }
  );
};
