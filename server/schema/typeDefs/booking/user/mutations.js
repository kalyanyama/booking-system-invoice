const { gql } = require("apollo-server");
const userMutations = gql`
  extend type Mutation {
    create_booking_user(input: BookingUserCreate): BookingUser
  }
`;
module.exports = userMutations;
