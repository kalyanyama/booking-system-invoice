const { STRING, INTEGER, DECIMAL } = require("sequelize");
const database = require("../../config/Database2/database");

const transactionConfig = database.define(
  "transactions",
  {
    id: { type: INTEGER },
    transaction_id: { type: STRING },
    user_id: { type: STRING },
    invoice_id: { type: STRING, primaryKey: true },
    order_id: { type: STRING },
    remarks: { type: STRING },
    amount: { type: DECIMAL },
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

module.exports = transactionConfig;
