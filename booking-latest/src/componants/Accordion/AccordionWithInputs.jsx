import {
  Accordion,
  ActionIcon,
  Center,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput, YearPickerInput } from "@mantine/dates";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { decrementEducation } from "../../Features/Education";
import { decrementExperience } from "../../Features/Experience";

const AccordionWithInputs = ({ label, inputOne, inputTwo, HandleOnChange }) => {
  const dispatch = useDispatch();

  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  const years = Array.from(
    { length: currentYear - 1979 },
    (_, index) => 1980 + index
  );
  const YearsList = years.map((year) => {
    return { value: year.toString(), label: year.toString() };
  });

  const HandleRemovingAccordion = () => {
    if (label.includes("Education")) {
      return dispatch(decrementEducation());
    }
    return dispatch(decrementExperience());
  };

  function AccordionControl(props) {
    return (
      <Center>
        <Accordion.Control {...props} />
        <ActionIcon
          size="lg"
          variant="transparent"
          color="red"
          onClick={HandleRemovingAccordion}
        >
          <IconTrash size="1rem" />
        </ActionIcon>
      </Center>
    );
  }

  // const HandleOnChange = (event, nameInput) => {
  //   if (event?.target === undefined || null) {
  //     const inputName = nameInput.replace(" ", "_").toUpperCase();
  //     return setFormData((prev) => ({ ...prev, [inputName]: event }));
  //   }
  //   const { name, value } = event.target;
  //   const inputName = name.replace(" ", "_").toUpperCase();
  //   setFormData((prev) => ({ ...prev, [inputName]: value }));
  // };

  // const HandleBlur = (e) => {
  //   const { name, value } = e.target;

  //   if (!value) {
  //     setFormErrors((prev) => ({
  //       ...prev,
  //       [name]: "This field is required.",
  //     }));
  //   } else {
  //     setFormErrors((prev) => ({ ...prev, [name]: null }));
  //   }
  // };

  return (
    <Accordion.Item value={`${label.toString()}`}>
      <AccordionControl>
        <Text>{label}</Text>
      </AccordionControl>
      <Accordion.Panel>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label={<Text>{inputOne.title}</Text>}
            id={label + "_title"}
            name={label + "_title"}
            onChange={HandleOnChange}
          />
          <TextInput
            label={<Text>{inputTwo.title}</Text>}
            id={label + "_caption"}
            name={label + "_caption"}
            onChange={HandleOnChange}
          />
          {label.includes("Education") ? (
            <>
              <YearPickerInput
                withAsterisk={false}
                label={<Text>From Year</Text>}
                id={label + "_from_year"}
                name={label + "_from_year"}
                onChange={(e) => HandleOnChange(e, label + "_from_year")}
                maxDate={new Date(currentYear, 1)}
              />
              <YearPickerInput
                withAsterisk={false}
                label={<Text>End Year</Text>}
                id={label + "_end_year"}
                name={label + "_end_year"}
                maxDate={new Date(currentYear, 1)}
                onChange={(e) => HandleOnChange(e, label + "_end_year")}
              />
            </>
          ) : (
            <>
              <DateInput
                label={<Text>From date</Text>}
                id={label + "_from_date"}
                withAsterisk={false}
                name={label + "_from_date"}
                maxDate={new Date(dateNow)}
                onChange={(e) => HandleOnChange(e, label + "_from_date")}
              />
              <DateInput
                withAsterisk={false}
                label={<Text>End date</Text>}
                id={label + "_end_date"}
                name={label + "_end_date"}
                maxDate={new Date(dateNow)}
                onChange={(e) => HandleOnChange(e, label + "_end_date")}
              />
            </>
          )}
        </SimpleGrid>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default AccordionWithInputs;
