const model = require("../../../../model/indexModel");
const { verifyToken } = require("../../../../helpers/verifyToken");

const bookingInvoiceQueries = {
  booking_invoice: async (_, { id }, { headers }) => {
    try {
      // if (!headers.authorization) {
      //   return;
      // }
      // const verify = verifyToken(headers.authorization);
      // if (!verify) {
      //   return new Error("Session completed or Check your authentication");
      // }
      // if (verify.role != "admin") {
      //   return null;
      // }

      const result = await model.booking_invoice.findOne({
        where: { invoice_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  booking_invoice_list: async (_, __, { headers }) => {
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

      const result = await model.booking_invoice.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingInvoiceQueries;
