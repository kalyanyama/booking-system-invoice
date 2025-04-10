const model = require("../../../../model/indexModel");
const { verifyToken } = require("../../../../helpers/verifyToken");

const bookingTransactionsQueries = {
  booking_transaction: async (_, { id }, { headers }) => {
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

      const result = await model.booking_transaction.findOne({
        where: { transaction_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  booking_transaction_list: async (_, __, { headers }) => {
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

      const result = await model.booking_transaction.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingTransactionsQueries;
