const { STRING, INTEGER, DECIMAL } = require("sequelize");
const database = require("../../config/Database2/database");

const invoiceConfig = database.define(
  "invoices",
  {
    id: { type: INTEGER },
    invoice_id: { type: STRING, primaryKey: true },
    transaction_id: { type: STRING },
    order_id: { type: STRING },
    payment_id: { type: STRING },
    user_id: { type: STRING },
    remarks: { type: STRING },
    slot_date: { type: INTEGER },
    amount: { type: DECIMAL },
    signature: { type: STRING },
    file: { type: STRING },
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

module.exports = invoiceConfig;
