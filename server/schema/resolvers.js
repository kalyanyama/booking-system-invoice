const { commonMutations, commonQueries } = require("./resolvers/common");
const { externalMutations, externalQueries } = require("./resolvers/external");

const {
  bookingResolverInvoiceMutations,
  bookingResolverInvoiceQueries,
  bookingResolverTransactionMutations,
  bookingResolverTransactionQueries,
  bookingResolverUserMutations,
  bookingResolverUserQueries,
} = require("./resolvers/booking");

const {
  contactPageMutations,
  contactPageQueries,
} = require("./resolvers/contact");

const resolvers = {
  Query: {
    ...commonQueries,
    // BOOKING-INVOICE QUERIES
    ...bookingResolverInvoiceQueries,
    // BOOKING-TRANSACTION QUERIES
    ...bookingResolverTransactionQueries,
    // BOOKING-USER QUERIES
    ...bookingResolverUserQueries,
    // CONTACT-PAGE QUERIES
    ...contactPageQueries,
  },

  // EXTERNAL QUERIES
  ...externalQueries,

  Mutation: {
    // COMMON MUTATIONS
    ...commonMutations,
    // BOOKING-INVOICE MUTATIONS
    ...bookingResolverInvoiceMutations,
    // BOOKING-TRANSACTION MUTATIONS
    ...bookingResolverTransactionMutations,
    // BOOKING-USER MUTATIONS
    ...bookingResolverUserMutations,
    // CONTACT-PAGE MUTATIONS
    ...contactPageMutations,
  },
};

module.exports = { resolvers };
