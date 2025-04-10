const { gql } = require("apollo-server");
const commonMutation = gql`
  extend type Mutation {
    update_subscription(input: UpdateSubscription): Subscription

    forgot_password(email: String!): Access!

    change_forgot_password(code: String!, new_password: String!): Access!

    logging_in(input: LoginAuthentication!): Login!
  }
`;

module.exports = commonMutation;
