const { verifyToken } = require("../../../helpers/verifyToken");
const model = require("../../../model/indexModel");

const Regular_Queries = {
  contacted_user_list: async (_, __, { headers }) => {
    try {
      if (!headers.authorization) {
        return;
      }
      const verify = verifyToken(headers.authorization);
      if (!verify) {
        return new Error("Session completed or Check your authentication");
      }
      if (verify.role != "admin") {
        return null;
      }

      const result = await model.contact_page.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  },
  contacted_user: async (_, { id }, { headers }) => {
    try {
      if (!headers.authorization) {
        return;
      }
      const verify = verifyToken(headers.authorization);
      if (!verify) {
        return new Error("Session completed or Check your authentication");
      }
      if (verify.role != "admin") {
        return null;
      }

      const result = await model.contact_page.findOne({
        where: { contact_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
};
module.exports = Regular_Queries;
