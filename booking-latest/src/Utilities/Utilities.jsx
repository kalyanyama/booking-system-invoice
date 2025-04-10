import { gql } from "@apollo/client";

export const ConvertToBase64Image = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(image);
  });
};

export const RefNameCodes = [
  "AVS2212",
  "AVS5499",
  "AVS6969",
  "AVS0799",
  "AVS2323",
  "AVS3120",
  "AVS1212",
  "AVS2021",
  "AVS4312",
  "AVS5643",
  "AVS6789",
  "AVS9012",
];

export const SERVER_URL = window.location.host.includes("localhost")
  ? "http://localhost:3200/api/"
  : "https://bookings.avsonline.in/api/";

export const SIMILAR_CREATE_CASE = async (type, values) => {
  try {
    const fullUrl = SERVER_URL + "user/similar/create/" + type;
    const bodyValues = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const result = await fetch(fullUrl, bodyValues);
    return result;
  } catch (error) {
    return error;
  }
};

export const CREATE_USER = gql`
  mutation ($input: BookingUserCreate) {
    create_booking_user(input: $input) {
      user_id
      name
      email
      mobile
    }
  }
`;

export const CREATE_INVOICE = gql`
  mutation ($input: BookingInvoiceCreate) {
    create_booking_invoice(input: $input) {
      invoice_id
      user_id
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation ($input: BookingTransactionCreate) {
    create_booking_transaction(input: $input) {
      user_id
      transaction_id
    }
  }
`;
