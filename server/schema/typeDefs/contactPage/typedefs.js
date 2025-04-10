const { gql } = require("apollo-server");

const contactPageTypeDefs = gql`
  type ContactPage {
    id: ID!
    contact_id: ID!
    name: String!
    email: String!
    mobile: String
    reason: String!
    message: String
    status: String
    createdAt: String
    updatedAt: String
  }
  input CreateContactPage {
    name: String!
    email: String!
    mobile: String
    reason: String!
    message: String
  }
`;

module.exports = contactPageTypeDefs;
