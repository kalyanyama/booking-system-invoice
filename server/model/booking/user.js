const { STRING, INTEGER, BOOLEAN } = require("sequelize");

const database = require("../../config/Database2/database");

const userModel = database.define(
  "users",
  {
    id: { type: INTEGER },
    user_id: { type: STRING, primaryKey: true },
    name: { type: STRING },
    email: { type: STRING },
    mobile: { type: INTEGER },
    alternative_mobile: { type: INTEGER },
    aadhar_card: { type: INTEGER },
    gender: { type: STRING },
    age: { type: INTEGER },
    current_address: { type: STRING },
    permanent_address: { type: STRING },
    educations: { type: STRING },
    experiences: { type: STRING },
    ref_code: { type: STRING },
    status: { type: INTEGER },
    ifdeleted: { type: INTEGER },
    createdAt: { type: STRING },
    updatedAt: { type: STRING },
  },
  {
    timestamps: false,
    freezeTableName: false,
  }
);

module.exports = userModel;
