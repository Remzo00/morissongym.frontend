import { Routes, Route } from "react-router-dom";
import Members from "./screens/members";
import Coach from "./screens/addCoach/coach";
import LoginPage from "./screens/login";
import Home from "./screens/home/home";
import Daily from "./screens/daily/daily";
import Settings from "./screens/settings/settings";
import LayoutNav from "./components/Layout/layout-nav";
import { useState } from "react";
import { ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import Rfid from "./screens/rfid/rfid";
import RegisterForm from "./screens/register/register";

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "dark" : "light"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <ThemeProvider theme={{ colorScheme, ...theme }}>
        <Routes>
          <Route element={<LayoutNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/rfid" element={<Rfid />} />
            <Route path="/coachs" element={<Coach />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/members" element={<Members />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registar" element={<RegisterForm />} />
        </Routes>
      </ThemeProvider>
    </ColorSchemeProvider>
  );
};
export default App;
