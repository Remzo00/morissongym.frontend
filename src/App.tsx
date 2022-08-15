import { Routes, Route } from "react-router-dom";
import Members from "./screens/members";
import Coach from "./screens/addCoach/coach";
import Login from "./screens/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/daily" element={<h1>Daily</h1>} />
      <Route path="/coachs" element={<Coach />} />
      <Route path="/settings" element={<h1>Settings</h1>} />
      <Route path="/members" element={<Members/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
