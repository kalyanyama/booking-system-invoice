const { gql } = require("apollo-server");
const transactionMutations = gql`
  extend type Mutation {
    create_booking_transaction(
      input: BookingTransactionCreate
    ): BookingTransaction
  }
`;
module.exports = transactionMutations;
