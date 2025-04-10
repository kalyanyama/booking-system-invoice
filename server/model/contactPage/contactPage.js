const database = require("../../config/Database2/database");
const { STRING, INTEGER } = require("sequelize");


const contactPage = database.define(
  "contacted_users",
  {
    id: { type: STRING },
    contact_id: { type: STRING, primaryKey: true },
    name: { type: STRING },
    email: { type: STRING },
    mobile: { type: STRING },
    reason: { type: STRING },
    message: { type: STRING },
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

module.exports = contactPage;
