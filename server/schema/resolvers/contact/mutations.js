const model = require("../../../model/indexModel");

const Regular_Mutations = {
  create_contact_page: async (_, { input }) => {
    try {
      input.contact_id = "cOn" + Date.now();
      const result = await model.contact_page.create(input);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
module.exports = Regular_Mutations;
