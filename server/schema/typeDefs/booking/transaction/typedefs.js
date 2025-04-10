const { gql } = require("apollo-server");

const transactionTypeDefs = gql`
  type BookingTransaction {
    id: ID
    transaction_id: ID!
    user_id: ID!
    invoice_id: ID!
    order_id: ID!
    remarks: String
    amount: Float!
    status: Int!
    ifdeleted: Int
    createdAt: String
    updatedAt: String
  }
  input BookingTransactionCreate {
    user_id: ID!
    invoice_id: ID!
    order_id: ID!
    remarks: String
    amount: Float!
    status: Int!
  }
`;

module.exports = transactionTypeDefs;
