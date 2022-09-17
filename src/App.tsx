import { Routes, Route } from "react-router-dom";
import Members from "./screens/members";
import Coach from "./screens/addCoach/coach";
import LoginPage from "./screens/login";
import Home from "./screens/home/home";
import Daily from "./screens/daily/daily";
import Settings from "./screens/settings/settings";
import LayoutNav from "./components/Layout/layout-nav";

const App = () => {
  return (
    <LayoutNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/coachs" element={<Coach />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/members" element={<Members />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </LayoutNav>
  );
};
export default App;
