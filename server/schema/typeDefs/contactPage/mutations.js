const { gql } = require("apollo-server");

const contactPageMutations = gql`
  extend type Mutation {
    create_contact_page(input: CreateContactPage): ContactPage
  }
`;
module.exports = contactPageMutations;
