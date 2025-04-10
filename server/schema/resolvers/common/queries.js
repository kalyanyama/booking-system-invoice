const { AuthenticationError } = require("apollo-server-express");
const { verifyToken, readJwtToken } = require("../../../helpers/verifyToken");
const model = require("../../../model/indexModel");

const Common_Queries = {
  transaction: async (_, { id }, { headers }) => {
    try {
      const verify = await verifyToken(headers.authorization);
      if (!verify) {
        return null;
      }
      const result = await model.transactions.findOne({
        where: { transaction_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  resume: async (_, { id }, { headers }) => {
    try {
      const verify = await verifyToken(headers.authorization);
      if (!verify) {
        return null;
      }
      const result = await model.resumes.findOne({
        where: { user_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  user_resume: async (_, __, { headers }) => {
    try {
      const verify = await verifyToken(headers.authorization);
      if (!verify) {
        return null;
      }
      const result = await model.resumes.findOne({
        where: { user_id: verify.user_id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  verify_forgot_password: async (_, { code }) => {
    try {
      const verify = await readJwtToken(code);
      if (!verify) {
        return null;
      }
      const { user_id, email, mobile } = verify;
      const result = await model.user.findOne({
        where: [{ user_id: user_id, email: email, mobile: mobile }],
      });

      if (result.length != 0) {
        return { access: true };
      }

      return { access: false, message: "Failed to verify, Try again please." };
    } catch (error) {
      throw new AuthenticationError(error.message);
    }
  },
};
module.exports = Common_Queries;
