import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import SignIn from "./pages/sign_in.jsx";
import Home from "./pages/home.jsx";
import { MantineProvider, createTheme, rem } from "@mantine/core";
const router = createHashRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
  components: {
    Button: {
      vars: (theme, props) => {
        return {
          root: {
            "--button-height": rem(60),
          },
        };
      },
      defaultProps: {
        // size: "xl",
        color: "red",
      },
    },
    Input: {
      defaultProps: {
        radius: "lg",
        size: "xl",
      },
    },
    Center: {
      defaultProps: {
        bg: "#CACCD2",
      },
    },
    TextInput: {
      defaultProps: {
        size: "xl",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
