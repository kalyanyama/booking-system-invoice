const bookingResolverInvoiceMutations = require("./invoice/mutations");
const bookingResolverInvoiceQueries = require("./invoice/queries");

const bookingResolverTransactionMutations = require("./transaction/mutations");
const bookingResolverTransactionQueries = require("./transaction/queries");

const bookingResolverUserMutations = require("./user/mutations");
const bookingResolverUserQueries = require("./user/queries");

module.exports = {
  bookingResolverInvoiceMutations,
  bookingResolverInvoiceQueries,
  bookingResolverTransactionMutations,
  bookingResolverTransactionQueries,
  bookingResolverUserMutations,
  bookingResolverUserQueries,
};
