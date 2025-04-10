const { gql } = require("apollo-server");

const userTypeDefs = gql`
  type BookingUser {
    id: Int
    user_id: ID!
    name: String!
    email: String!
    mobile: String!
    alternative_mobile: String!
    aadhar_card: String!
    gender: String
    age: Int
    current_address: String!
    permanent_address: String!
    educations: String!
    experiences: String!
    ref_code: String!
    status: Int
    ifdeleted: Int
    createdAt: String
    updatedAt: String
  }
  input BookingUserCreate {
    name: String!
    email: String!
    mobile: String!
    alternative_mobile: String!
    aadhar_card: String!
    gender: String
    age: Int
    current_address: String!
    permanent_address: String!
    educations: String!
    experiences: String!
    ref_code: String!
  }
`;

module.exports = userTypeDefs;
