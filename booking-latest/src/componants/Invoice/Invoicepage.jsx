import {
  Page,
  Document,
  StyleSheet,
  Text,
  View,
  Link,
  Font,
} from "@react-pdf/renderer";
import { CONTACT_INFORMATION, MAIN_DETAILS } from "../../Content/Content";
import daysjs from "dayjs";

const InvoicePage = ({ details }) => {
  const currentDate = daysjs().format("DD/MM/YYYY");

  const styles = StyleSheet.create({
    body: {
      paddingTop: 55,
      paddingBottom: 65,
      paddingHorizontal: 55,
    },
    title: {
      fontSize: 24,
      fontFamily: "Oswald",
    },
    caption: {
      fontSize: 12,
    },
    subTitle: {
      fontSize: 18,
      fontFamily: "Oswald",
    },
    text: {
      fontSize: 12,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    boldText: {
      fontSize: 12,
      fontWeight: "extrabold",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      textAlign: "center",
      color: "grey",
    },
    flex: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    container: {
      gap: 5,
    },
    stack: {
      flexDirection: "column",
      gap: 4,
    },
    status: {
      textTransform: "uppercase",
      color: "green",
    },
    horizontalLine: {
      borderTopWidth: 1,
      borderTopColor: "grey",
      borderTopStyle: "solid",
      marginVertical: 9,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  });

  const termsAndConditions = [
    {
      text: "We provide professional consulting services which are accessible through bookings made on our website. Users must ensure availability for scheduled sessions as per their bookings.",
    },
    {
      text: "All payments for services booked through our website must be made in advance or at office. We accept various forms of electronic payment, as detailed on our site. Payments are non-refundable except as explicitly stated in these Terms.",
    },
    {
      text: "You may not use our site or services for any unlawful purpose, to solicit others to perform illegal activities, or to violate any applicable national or international laws or regulations.",
    },
    {
      text: "Users are required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
  ];

  const mappingTermsAndConditions = termsAndConditions.map((item, index) => (
    <View style={{ justifyContent: "space-between" }} key={index}>
      <Text style={{ fontSize: 8 }}>-</Text>{" "}
      <Text style={{ fontSize: 8 }} key={index}>
        {item.text}
      </Text>
    </View>
  ));

  const dateParse = new Date(details.slot_date);
  const bookedDate = dateParse.toDateString();


  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.flex}>
          <View style={styles.stack}>
            <Text style={styles.title}>{MAIN_DETAILS.full_name}</Text>
            <Text style={styles.text}>We are dealing IT & Non-IT jobs</Text>
          </View>
          <View style={[styles.stack, { textAlign: "right" }]}>
            <Text style={styles.boldText}>
              INVOICE ID : #{details.invoice_id}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "right" }}>
              Invoice date : {currentDate}
            </Text>
          </View>
        </View>

        <View style={[styles.flex, { marginVertical: 30 }]}>
          <View style={styles.stack}>
            <Text style={{ fontSize: 12, fontWeight: 900 }}>Invoiced to :</Text>
            <Text style={styles.subTitle}>{details.name}</Text>
            <Text style={styles.text}>{details.mobile}</Text>
            <Text style={styles.text}>{details.email}</Text>
            <Text style={styles.text}>{details.current_address}</Text>
          </View>
        </View>

        <Text
          style={{
            color: "white",
            padding: 4,
            backgroundColor: "red",
            marginVertical: 15,
            borderRadius: 5,
            fontSize: 12,
          }}
        >
          Congratulations! Your reservation has been successfully confirmed. Pay
          amount at office
        </Text>
        <View style={styles.container}>
          <View style={styles.horizontalLine}></View>
          <View style={styles.flex}>
            <Text style={styles.text}>Booked on</Text>
            <Text style={styles.text}>{bookedDate}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.text}>Amount</Text>
            <Text style={styles.text}>499.00</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.text}>Status</Text>
            <Text style={[styles.text, { color: "red" }]}>UNPAID</Text>
          </View>
          <View style={styles.horizontalLine}></View>
        </View>
        <View style={[styles.container, { marginVertical: 15 }]}>
          <Text style={styles.boldText}>Terms and Conditioins :</Text>
          {mappingTermsAndConditions}
        </View>
        <View style={[styles.stack, { marginVertical: 20 }]}>
        <View style={styles.horizontalLine}></View>
          <Text style={[styles.text, { textAlign: "center" }]}>
            For queries or assistance, contact us at{" "}
            <Link href={`mailto:${CONTACT_INFORMATION.support_email}`}>
              {CONTACT_INFORMATION.support_email}
            </Link>
            . We're here to help.
          </Text>
          <Text style={[styles.text, { textAlign: "center" }]}>
            {CONTACT_INFORMATION.address}
          </Text>
          <Link
            href={MAIN_DETAILS.domain}
            style={[styles.text, { textAlign: "center" }]}
            fixed
          >
            {MAIN_DETAILS.name}
          </Link>
        </View>
      </Page>
    </Document>
  );
};
export default InvoicePage;
