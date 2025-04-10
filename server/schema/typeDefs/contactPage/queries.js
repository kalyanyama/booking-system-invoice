const { gql } = require("apollo-server");

const contactPageQueries = gql`
  extend type Query {
    contacted_user(id: ID): ContactPage
    contacted_user_list: [ContactPage]
  }
`;
module.exports = contactPageQueries;
