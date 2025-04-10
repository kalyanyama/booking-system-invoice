const bookingUserModel = require("./booking/user");
const bookingInvoiceModel = require("./booking/invoice");
const bookingTransactionModel = require("./booking/transactions");
const contactPageModel = require("./contactPage/contactPage");

const model = {};
model.booking_user = bookingUserModel;
model.booking_invoice = bookingInvoiceModel;
model.booking_transaction = bookingTransactionModel;
model.contact_page = contactPageModel;

module.exports = model;
