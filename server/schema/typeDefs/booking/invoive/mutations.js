const { gql } = require("apollo-server");
const invoiceMutations = gql`
  extend type Mutation {
    create_booking_invoice(input: BookingInvoiceCreate): BookingInvoice
  }
`;
module.exports = invoiceMutations;
