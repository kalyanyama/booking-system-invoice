const { gql } = require("apollo-server");
const commonQueries = gql`
  extend type Query {
    profile: Profile!
    resumes: [Resume]
    subscriptions: [Subscription]
    subscriptionPlan(id: ID!): SubscriptionPlan
    subscriptionPlans: [SubscriptionPlan]
    transaction(id: ID!): Transaction
    transactions: [Transaction]
    verify_forgot_password(code: String!): Access!
  }
`;

module.exports = commonQueries;
