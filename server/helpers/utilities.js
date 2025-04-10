const { Op } = require("sequelize");

const SEARCH_HELPER = (parsedConditions) => {
  return Object.keys(parsedConditions).map((item) => {
    const newValue = {
      [item]: { [Op.like]: `%${parsedConditions[item]}%` },
    };
    return newValue;
  });
};

module.exports = { SEARCH_HELPER };
