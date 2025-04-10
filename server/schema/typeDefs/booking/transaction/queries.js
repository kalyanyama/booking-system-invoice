const { gql } = require("apollo-server");
const transactionQueries = gql`
  extend type Query {
    booking_transaction(id: ID!): BookingTransaction
    booking_transaction_list: [BookingTransaction]
  }
`;
module.exports = transactionQueries;
