import { Routes, Route } from "react-router-dom";
import Members from "./screens/members";
import Coach from "./screens/addCoach/coach";
import Login from "./screens/login";
import Home from "./screens/home/home";
import Daily from "./screens/daily/daily";
import Settings from "./screens/settings/settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/coachs" element={<Coach />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/members" element={<Members/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
