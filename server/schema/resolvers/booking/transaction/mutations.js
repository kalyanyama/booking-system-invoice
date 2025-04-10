const model = require("../../../../model/indexModel");

const bookingTransactionsMutations = {
  create_booking_transaction: async (_, { input }) => {
    try {
      input.transaction_id = "tRn" + Date.now();
      const result = await model.booking_transaction.create(input);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingTransactionsMutations;
