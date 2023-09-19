const Test = require("../Model/testModel");

exports.getAllTest = async (req, res) => {
  try {
    const test = await Test.find();
    res.status(200).json({
      status: "success",
      results: test.length,
      data: {
        test,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail+",
      data: err,
    });
  }
};
exports.createTest = async (req, res) => {
  try {
    const newTest = await Test.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        test: newTest,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail-",
      message: err,
    });
  }
};
