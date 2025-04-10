const { gql } = require("apollo-server");
const userQueries = gql`
  extend type Query {
    booking_user(id: ID!): BookingUser
    booking_user_list: [BookingUser]
  }
`;
module.exports = userQueries;
