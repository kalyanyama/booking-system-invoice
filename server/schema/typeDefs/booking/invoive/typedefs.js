const { gql } = require("apollo-server");

const invoiceTypeDefs = gql`
  type BookingInvoice {
    id: ID
    user_id: ID!
    invoice_id: ID!
    transaction_id: ID!
    order_id: String
    payment_id: String
    remarks: String
    slot_date: String
    amount: Float!
    signature: String
    file: String
    status: String!
    ifdeleted: Int
    createdAt: String
    updatedAt: String
  }
  input BookingInvoiceCreate {
    user_id: ID!
    transaction_id: ID!
    order_id: String
    payment_id: String
    remarks: String
    slot_date: String
    amount: Float!
    signature: String
    file: String
    status: Int!
  }
`;

module.exports = invoiceTypeDefs;
