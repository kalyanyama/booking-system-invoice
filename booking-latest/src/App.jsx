import {
  LoadingOverlay,
  MantineProvider,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  TextInput,
  Textarea,
  ThemeIcon,
  createTheme,
} from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import Home from "./componants/Home/Home";
import AppshellProvider from "./Appshell/Appshell";
import { useEffect, useState } from "react";
import Success from "./componants/Success/Success";
import { DateInput, DateTimePicker, YearPickerInput } from "@mantine/dates";

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    DateInput: DateInput.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    DateTimePicker: DateTimePicker.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    YearPickerInput: YearPickerInput.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        w: "100%",
        h: "fit-content",
        allowDeselect: false,
        description: true,
        placeholder: "...",
        required: true,
        withAsterisk: false,
      },
    }),
    LoadingOverlay: LoadingOverlay.extend({
      defaultProps: {
        h: "100%",
        w: "100%",
        zIndex: 100,
        overlayProps: { radius: "sm", blur: 10, bg: "none" },
        loaderProps: { color: "blue", type: "bars" },
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        w: "100%",
        withAsterisk: false,
        description: true,
        placeholder: "...",
        required: true,
      },
    }),
    SimpleGrid: SimpleGrid.extend({
      defaultProps: {
        cols: { base: 1, sm: 2 },
        w: "100%",
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        variant: "transparent",
        size: "lg",
        c: "dark",
      },
    }),
  },
});

const App = () => {
  const [animationGif, setAnimationGif] = useState(true);
  const { pathname } = window.location;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationGif(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  const router = createBrowserRouter([
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/success-page/:details",
      element: <Success />,
    },
  ]);

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {/* {animationGif ? (
        <Image src="/assets/logo-animation.gif" h={700} />
      ) : ( */}
      <AppshellProvider>
        <RouterProvider router={router} />
      </AppshellProvider>
      {/* )} */}
    </MantineProvider>
  );
};

export default App;
