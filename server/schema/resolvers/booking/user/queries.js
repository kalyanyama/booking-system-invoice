const model = require("../../../../model/indexModel");
const { verifyToken } = require("../../../../helpers/verifyToken");

const bookingUserQueries = {
  booking_user: async (_, { id }, { headers }) => {
    try {
      if (!headers.authorization) {
        return;
      }
      const verify = verifyToken(headers.authorization);
      if (!verify) {
        return new Error("Session completed or Check your authentication");
      }
      if (verify.role != "admin") {
        return null;
      }

      const result = await model.booking_user.findOne({
        where: { user_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  booking_user_list: async (_, __, { headers }) => {
    try {
      if (!headers.authorization) {
        return;
      }
      const verify = verifyToken(headers.authorization);
      if (!verify) {
        return new Error("Session completed or Check your authentication");
      }
      if (verify.role != "admin") {
        return null;
      }

      const result = await model.booking_user.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingUserQueries;
