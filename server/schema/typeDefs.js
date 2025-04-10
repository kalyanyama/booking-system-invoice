const { gql } = require("apollo-server");

const {
  commonMutations,
  commonQueries,
  commonTypeDefs,
} = require("./typeDefs/common/index");

const {
  bookingInvoiceMutations,
  bookingInvoiceQueries,
  bookingInvoiceTypeDefs,
  bookingTransactionMutations,
  bookingTransactionQueries,
  bookingTransactionTypeDefs,
  bookingUserMutations,
  bookingUserQueries,
  bookingUserTypeDefs,
} = require("./typeDefs/booking/index");

const {
  contactPageMutations,
  contactPageQueries,
  contactPageTypeDefs,
} = require("./typeDefs/contactPage/index");

const typeDefs = gql`
  type Query
  type Mutation
  ${commonTypeDefs}
  ${bookingInvoiceTypeDefs}
  ${bookingTransactionTypeDefs}
  ${bookingUserTypeDefs}
  ${contactPageTypeDefs}

  ${commonQueries}
  ${bookingUserQueries}
  ${bookingInvoiceQueries}
  ${bookingTransactionQueries}
  ${contactPageQueries}

  ${commonMutations}
  ${bookingUserMutations}
  ${bookingInvoiceMutations}
  ${bookingTransactionMutations}
  ${contactPageMutations}
`;

module.exports = { typeDefs };
