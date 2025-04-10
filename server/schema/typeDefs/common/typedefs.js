const { gql } = require("apollo-server");
const commonDefs = gql`
  type Login {
    token: String!
  }

  type Access {
    access: Boolean!
    message: String
  }

  type Profile {
    name: String!
    designation: String
    email: String!
    mobile: String
    image: String
    gender: String
    age: Int
    address: String
    role: String!
    city: String
    pincode: Int
    state: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type Resume {
    resume_id: ID!
    user_id: ID!
    overview: String
    educations: String
    skills: String
    experience: String
    file: String
    status: Int!
    ifdeleted: Int
    createdAt: String!
    updatedAt: String!
  }

  type Subscription {
    subscription_plan_id: ID!
    user_id: ID!
    status: Int!
    ifdeleted: Int!
    createdAt: String
    updatedAt: String
  }
  type SubscriptionPlan {
    subscription_plan_id: ID!
    title: String!
    description: String!
    type: String!
    price: Float!
    discount: Float!
    tax: Float!
    status: Int!
    ifdeleted: Int!
    createdAt: String
    updatedAt: String
  }

  type Transaction {
    transaction_id: ID!
    subscription_plan_id: ID!
    user_id: ID!
    price: Float!
    remarks: String!
    status: Int!
    ifdeleted: Int!
    createdAt: String
    updatedAt: String
  }
  input PasswordUpdate {
    current_password: String!
    new_password: String!
  }

  input LoginAuthentication {
    username: String!
    password: String!
    role: String!
  }

  input CreateTransaction {
    user_id: ID!
    transaction_id: ID!
    subscription_plan_id: String!
    price: Float!
    remarks: String!
    status: Int!
  }

  input CreateSubscription {
    user_id: ID!
    transaction_id: ID!
    subscription_plan_id: String!
    price: Float!
    remarks: String!
    status: Int!
  }

  input UpdateSubscription {
    user_id: ID!
    transaction_id: ID!
    subscription_plan_id: String!
    price: Float!
    remarks: String!
    status: Int!
  }
`;

module.exports = commonDefs;
