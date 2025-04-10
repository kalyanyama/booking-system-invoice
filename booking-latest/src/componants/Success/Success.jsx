import { Container, Stack, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import InvoicePage from "../Invoice/Invoicepage";
import { SUCCESS_PAGE } from "../../Content/Content";
import { usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import {
  CREATE_INVOICE,
  ConvertToBase64Image,
} from "../../Utilities/Utilities";
import { useMutation } from "@apollo/client";

const Success = () => {
  const { details } = useParams();
  const [createInvoiceMutation] = useMutation(CREATE_INVOICE);
  const decodeDetails = JSON.parse(atob(details));
  const [invoiceId, setInvoiceID] = useState("");

  decodeDetails.invoice_id = invoiceId;

  const [instance, updateInstance] = usePDF({
    document: <InvoicePage details={decodeDetails} />,
  });

  useEffect(() => {
    const CreatingInvoiceAndSendingMail = async () => {
      if (!instance.loading) {
        const value = await ConvertToBase64Image(instance.blob);
        const invoiceResult = await createInvoiceMutation({
          variables: {
            input: {
              user_id: decodeDetails.user_id,
              transaction_id: decodeDetails.transaction_id,
              order_id: decodeDetails.order_id,
              payment_id: decodeDetails.payment_id,
              remarks: decodeDetails.remarks,
              amount: decodeDetails.amount,
              slot_date: decodeDetails.slot_date,
              signature: decodeDetails.signature,
              file: value,
              status: 0,
            },
          },
        });
        setInvoiceID(invoiceResult.data.create_booking_invoice.invoice_id);
        return invoiceResult;
      }
    };
    CreatingInvoiceAndSendingMail();
  }, [instance]);

  return (
    <Container h={700}>
      <Stack justify="center" align="center" ta={"center"} h={"100%"}>
        <Title>
          <Text
            fw={400}
            variant="gradient"
            gradient={{
              from: details.status === "failed" ? "red" : "green",
              to: "yellow",
              deg: 0,
            }}
            inherit
          >
            {decodeDetails.name} {SUCCESS_PAGE.title}
          </Text>
        </Title>
        <Text c={"dimmed"}>{SUCCESS_PAGE.description}</Text>
      </Stack>
    </Container>
  );
};

export default Success;
