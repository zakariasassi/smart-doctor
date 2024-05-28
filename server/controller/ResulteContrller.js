const Resulte = require("../model/ResulteModel");
const mongoose = require("mongoose");
// Create a new result
exports.createResult = async (req, res) => {
  try {
    const { description, qutionID } = req.body;
    const newResult = new Resulte({ description, qutionID });
    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Resulte.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllYesResultsByID = async (req, res) => {
  try {
    // Extract the data string from the request params and parse it into an array
    const dataArray = JSON.parse(req.params.data);

    // If dataArray is an array with one element which is a string, split it to get the individual IDs
    const ids =
      dataArray.length === 1 && typeof dataArray[0] === "string"
        ? dataArray[0].split(",")
        : dataArray;

    // Fetch results for each id
    const data = await Promise.all(
      ids.map(async (id) => {
        return Resulte.find({ qutionID: id });
      })
    );

    // Flatten the array if necessary (if each find returns an array)
    const flattenedData = data.flat();

    console.log(flattenedData);
    // Respond with the results
    res.json(flattenedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Get a single result by ID
exports.getResultById = async (req, res) => {
  try {
    const result = await Resulte.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a result by ID
exports.updateResult = async (req, res) => {
  try {
    const { score, user, date } = req.body;
    const updatedResult = await Resulte.findByIdAndUpdate(
      req.params.id,
      { score, user, date },
      { new: true }
    );
    if (!updatedResult) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.json(updatedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a result by ID
exports.deleteResult = async (req, res) => {
  try {
    const deletedResult = await Resulte.findByIdAndDelete(req.params.id);
    if (!deletedResult) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
