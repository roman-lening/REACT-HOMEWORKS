import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { boxTheme } from "./styles";

const MyButton = styled("button")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  color: "#2d3436",
  padding: 15,
  borderRadius: 8,
  boxShadow: "inherit",
  fontWeight: "bold",
}));

function MyComponent({ darklTheme, lightTheme }) {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? lightTheme : darklTheme}>
      <CssBaseline />
      <Box sx={boxTheme(theme)}>
        <Typography color={theme ? "primary" : "secondary"} variant="h1">
          Hello World!
        </Typography>
        <MyButton
          onClick={() => {
            setTheme(!theme);
          }}
        >
          Change Theme
        </MyButton>
      </Box>
    </ThemeProvider>
  );
}

export default MyComponent;
