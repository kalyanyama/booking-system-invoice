const model = require("../../../../model/indexModel");
const BOOKING_MAIL_SENDER = require("../../../../utilities/mailConfigs/bookingPDF");

const bookingInvoiceMutations = {
  create_booking_invoice: async (_, { input }) => {
    try {
      input.invoice_id = "iNv" + Date.now();

      const { transaction_id, user_id } = input;

      const findTransactionId = await model.booking_invoice.findAll({
        where: { transaction_id: transaction_id, user_id: user_id },
      });
      if (findTransactionId.length != 0) {
        return;
      }
      const result = await model.booking_invoice.create(input);

      const userResult = await model.booking_user.findAll({
        where: { user_id: user_id },
      });

      await BOOKING_MAIL_SENDER(
        userResult[0].email,
        userResult[0].name,
        userResult[0].slot_date,
        input.file
      );

      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingInvoiceMutations;
