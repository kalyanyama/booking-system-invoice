const { gql } = require("apollo-server");
const invoiceQueries = gql`
  extend type Query {
    booking_invoice(id: ID!): BookingInvoice
    booking_invoice_list: [BookingInvoice]
  }
`;
module.exports = invoiceQueries;
