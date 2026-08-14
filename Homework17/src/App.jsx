import MyComponent from "./components/MyComponent";
import "./App.css";
import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00b894",
    },
    secondary: {
      main: "#0984e3",
    },
  },
});

const darklTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffeaa7",
    },
    secondary: {
      main: "#ff7675",
    },
  },
});

function App() {
  return (
    <>
      <MyComponent lightTheme={lightTheme} darklTheme={darklTheme} />
    </>
  );
}

export default App;
