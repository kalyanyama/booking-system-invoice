import {
  Accordion,
  Anchor,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementEducation } from "../../Features/Education";
import { incrementExperience } from "../../Features/Experience";
import AccordionWithInputs from "../Accordion/AccordionWithInputs";
import {
  IconBackpack,
  IconCertificate,
  IconUserCheck,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mantine/dates";
import LoaderPage from "../../Loader";
import dayjs from "dayjs";
import {
  CREATE_TRANSACTION,
  CREATE_USER,
  RefNameCodes,
} from "../../Utilities/Utilities";
import { useMutation } from "@apollo/client";

const filteringDataFromObject = (Data, type) => {
  return Object.keys(Data).reduce((filterObjectKey, key) => {
    if (key.includes(type)) {
      filterObjectKey[key] = Data[key];
    }
    return filterObjectKey;
  }, {});
};
const groupingObjectsByType = (data, type) => {
  return Object.keys(data).reduce((acc, key) => {
    const match = key.match(/\d/g);
    if (match) {
      const groupNum = match[0];
      if (!acc[groupNum]) acc[groupNum] = {};
      const newKey = key.replace(`${type}_${groupNum}_`, "");
      acc[groupNum][newKey] = data[key];
    }
    return acc;
  }, {});
};

const Home = () => {
  const [createUserMutation] = useMutation(CREATE_USER);

  const [createTransactionMutation] = useMutation(CREATE_TRANSACTION);
  const stateEduValues = useSelector((state) => state.education);
  const stateExpValues = useSelector((state) => state.experience);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [refCode, setRefCode] = useState("");
  const [alternativeMobile, setAlternativeMobile] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [pernamentAddress, setPernamentAddress] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [formData, setFormData] = useState([]);
  const [bookingDate, setBookingDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dateRef = useRef(null);

  const HandleOnChange = (event, nameInput) => {
    if (event?.target === undefined || null) {
      const inputName = nameInput.replace(" ", "_").toUpperCase();
      return setFormData((prev) => ({ ...prev, [inputName]: event }));
    }
    const { name, value } = event.target;
    const inputName = name.replace(" ", "_").toUpperCase();
    setFormData((prev) => ({ ...prev, [inputName]: value }));
  };

  const mappingEducationalComponants = Array(stateEduValues.value)
    .fill(0)
    .map((_, index) => {
      const mainCount = index + 1;
      const EducationInput = {
        label: "Education " + mainCount,
        inputOne: {
          title: "Level",
        },
        inputTwo: {
          title: "College",
        },
        inputThree: {
          title: "Duration",
        },
        HandleOnChange,
      };
      return <AccordionWithInputs key={index} {...EducationInput} />;
    });

  const mappingExperienceComponants = Array(stateExpValues.value)
    .fill(0)
    .map((_, index) => {
      const mainCount = index + 1;
      const ExperienceInput = {
        label: "Experience " + mainCount,
        inputOne: {
          title: "Company",
        },
        inputTwo: {
          title: "Role",
        },
        inputThree: {
          title: "Duration",
        },
        HandleOnChange,
      };
      return <AccordionWithInputs key={index} {...ExperienceInput} />;
    });

  const handleSubmitting = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userResult = await createUserMutation({
        variables: {
          input: {
            name: name,
            email: email,
            mobile: mobile,
            alternative_mobile: alternativeMobile,
            age: age,
            gender: gender,
            aadhar_card: aadharCard,
            current_address: currentAddress,
            permanent_address: pernamentAddress,
            educations: JSON.stringify(
              groupingObjectsByType(
                filteringDataFromObject(formData, "EDUCATION"),
                "EDUCATION"
              )
            ),
            experiences: JSON.stringify(
              groupingObjectsByType(
                filteringDataFromObject(formData, "EXPERIENCE"),
                "EXPERIENCE"
              )
            ),
            ref_code: refCode,
          },
        },
      });
      const transactionResult = await createTransactionMutation({
        variables: {
          input: {
            user_id: userResult.data.create_booking_user.user_id,
            invoice_id: "",
            order_id: "",
            remarks: "booking slot payment",
            amount: 499,
            status: 0,
          },
        },
      });
      const docDetails = {
        user_id: userResult.data.create_booking_user.user_id,
        transaction_id:
          transactionResult.data.create_booking_transaction.transaction_id,
        name: name,
        email: email,
        mobile: mobile,
        slot_date: bookingDate,
        current_address: currentAddress,
        order_id: "",
        payment_id: "",
        remarks: "booking slot payment",
        amount: 499,
        signature: "",
        status: 0,
      };
      setErrorMessage("");
      return navigator("/success-page/" + btoa(JSON.stringify(docDetails)));
    } catch (error) {
      setErrorMessage("Error : " + error.message);
    }
  };

  if (loading) {
    return <LoaderPage />;
  }

  return (
    <Container size={"md"} py="xl" my="xl">
      <form onSubmit={handleSubmitting}>
        <Stack gap={"xl"}>
          <Stack>
            <Group>
              <ThemeIcon>
                <IconUserCheck />
              </ThemeIcon>
              <Text size="xl">Personal Details</Text>
            </Group>
            <Divider />
            <SimpleGrid>
              <TextInput
                label={<Text>Name</Text>}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                label={<Text>Email</Text>}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <NumberInput
                label={<Text>Mobile</Text>}
                onChange={(e) => setMobile(e.toString())}
              />
              <NumberInput
                label={<Text>Alternative Mobile</Text>}
                onChange={(e) => setAlternativeMobile(e.toString())}
              />
              <NumberInput
                label={<Text>Age</Text>}
                onChange={(e) => setAge(e)}
              />
              <Select
                label={<Text>Gender</Text>}
                data={["Male", "Female"]}
                onChange={(e) => setGender(e)}
              />
              <NumberInput
                label={<Text>Aadhar</Text>}
                onChange={(e) => setAadharCard(e.toString())}
              />{" "}
              <Select
                label={<Text>Ref Code</Text>}
                data={RefNameCodes}
                onChange={(e) => setRefCode(e)}
              />
            </SimpleGrid>

            <DateTimePicker
              valueFormat="DD MMM YYYY hh:mm A"
              value={bookingDate}
              label={<Text>Schedule your meeting</Text>}
              placeholder="We are only available from Monday-Friday"
              onChange={(e) => setBookingDate(e)}
              clearable
              minDate={new Date()}
              ref={dateRef}
              maxDate={dayjs(new Date()).add(1, "month").toDate()}
            />
            <Textarea
              rows={4}
              label={<Text>Current Address</Text>}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
            <Textarea
              rows={4}
              label={<Text>Permanent Address</Text>}
              onChange={(e) => setPernamentAddress(e.target.value)}
            />
          </Stack>
          <Stack gap={"xs"}>
            <Group>
              <ThemeIcon>
                <IconBackpack />
              </ThemeIcon>
              <Text size="xl">Education</Text>
            </Group>
            <Divider />
            <Accordion
              variant="contained"
              chevronPosition="left"
              radius={"sm"}
              multiple
              defaultValue={`Education 1`}
            >
              {mappingEducationalComponants}
            </Accordion>
            <Group>
              <Button
                variant="outline"
                color="teal"
                bg={"transparent"}
                onClick={() => dispatch(incrementEducation())}
                disabled={stateEduValues.value > 4 ? true : false}
              >
                Add {stateEduValues.value === 0 ? "Education" : "More +"}
              </Button>
            </Group>
          </Stack>
          <Stack gap={"xs"}>
            <Stack>
              <Group>
                <ThemeIcon>
                  <IconCertificate />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xl">Experience</Text>
                  <Text size="xs" c={"dimmed"}>
                    Note : Leave it if your fresher.
                  </Text>
                </Stack>
              </Group>
              <Divider />
            </Stack>
            <Accordion
              variant="contained"
              chevronPosition="left"
              radius={"sm"}
              multiple
              defaultValue={`Education1`}
            >
              {mappingExperienceComponants}
            </Accordion>
            <Group>
              <Button
                variant="outline"
                color="teal"
                bg={"transparent"}
                onClick={() => dispatch(incrementExperience())}
                disabled={stateExpValues.value > 5 ? true : false}
              >
                Add {stateExpValues.value === 0 ? "Experience" : "More +"}
              </Button>
            </Group>
          </Stack>
          <Stack>
            <Checkbox
              label={
                <Text>
                  I agree to accept the{" "}
                  <Anchor href="https://avsonline.in/terms-and-conditions">
                    terms and conditions
                  </Anchor>{" "}
                  to use this service.
                </Text>
              }
              onChange={(e) => setTermsAndConditions(e.target.checked)}
              required
            />
            <Checkbox
              label={<Text>I accept the charges of 499/-</Text>}
              required
            />
            <Text ta={"center"} c={"red"} ff={"monospace"}>
              {errorMessage}
            </Text>
          </Stack>
          <Button variant="outline" type="submit" color={"dark"}>
            Book Appointment
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Home;
