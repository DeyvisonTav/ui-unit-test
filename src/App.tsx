import { ThemeProvider } from "styled-components";
import { Register } from "./page/Register";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Register />
    </ThemeProvider>
  );
}
