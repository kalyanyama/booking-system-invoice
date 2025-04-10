const model = require("../../../../model/indexModel");

const bookingUserMutations = {
  create_booking_user: async (_, { input }) => {
    try {
      input.user_id =
        "uSr" +  Date.now();
      const result = await model.booking_user.create(input);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = bookingUserMutations;
