const Nature = require("../models/scienceAnature");
const { Response, ResponseError } = require("../utils/response");
require("dotenv").config();

exports.easyScienceQuestion = async (request) => {
  let { category, choice, level, setQuestion, answers } = request.body;

  let newEasyQuestion = new Nature({
    category: category,
    choice: choice,
    level: level,
    setQuestion: setQuestion,
    answers: answers,
  });
  let displayData = await newEasyQuestion.save();
  console.log(displayData);
  return new Response(200, {
    status: "Successful",
    question_one: displayData,
  });
};

exports.getAllScienceQuestion = async (request) => {
  try {
    let results = await Nature.find({});
    return new ResponseError(200, {
      status: "Successful",
      output: results,
    });
  } catch (error) {
    throw new ResponseError(400, "Cannot fetch data");
  }
};
