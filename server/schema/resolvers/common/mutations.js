const bCrypt = require("bcryptjs");
const model = require("../../../model/indexModel");
const { AuthenticationError } = require("apollo-server-express");
const {
  GenerateToken,
  readJwtToken,
} = require("../../../helpers/verifyToken");

const FORGOT_PASSWORD_MAIL = require("../../../utilities/mailConfigs/forgotPassword");

const salt = 10;

const Common_Mutations = {
  forgot_password: async (_, { email }) => {
    try {
      const result = await model.user.findOne({ where: { email: email } });

      if (result) {
        const token = await GenerateToken(
          {
            user_id: result.user_id,
            email: result.email,
            mobile: result.mobile,
          },
          "10m"
        );
        await FORGOT_PASSWORD_MAIL(result.email, result.name, token);
        return { access: true };
      }
      return new AuthenticationError(
        "No user found on this email, Please try to register."
      );
    } catch (error) {
      throw new AuthenticationError(error.message);
    }
  },
  change_forgot_password: async (_, { code, new_password }) => {
    try {
      const verify = await readJwtToken(code);

      if (!verify) {
        return null;
      }
      const { user_id, email, mobile } = verify;

      const result = await model.user.findOne({
        where: [{ user_id: user_id, email: email, mobile: mobile }],
      });

      new_password = await bCrypt.hash(new_password, salt);

      if (result.length != 0) {
        const updateUserPassword = await model.user.update(
          {
            password: new_password,
          },
          {
            where: {
              user_id: user_id,
              email: email,
              mobile: mobile,
            },
          }
        );
        return {
          access: true,
          message: "Successfully changed password, Try to login.",
        };
      }
      return { access: false, message: "Failed to verify, Try again please." };
    } catch (error) {
      throw new AuthenticationError(error.message);
    }
  },
};
module.exports = Common_Mutations;
