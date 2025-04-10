const bookingInvoiceMutations = require("./invoive/mutations");
const bookingInvoiceQueries = require("./invoive/queries");
const bookingInvoiceTypeDefs = require("./invoive/typedefs");

const bookingTransactionMutations = require("./transaction/mutations");
const bookingTransactionQueries = require("./transaction/queries");
const bookingTransactionTypeDefs = require("./transaction/typedefs");

const bookingUserMutations = require("./user/mutations");
const bookingUserQueries = require("./user/queries");
const bookingUserTypeDefs = require("./user/typedefs");

module.exports = {
  bookingInvoiceMutations,
  bookingInvoiceQueries,
  bookingInvoiceTypeDefs,
  bookingTransactionMutations,
  bookingTransactionQueries,
  bookingTransactionTypeDefs,
  bookingUserMutations,
  bookingUserQueries,
  bookingUserTypeDefs,
};
