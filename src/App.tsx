import { Routes, Route } from "react-router-dom";
import Login from "./screens/loginScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/members" element={<h1>Members</h1>} />
      <Route path="/coach" element={<h1>coach</h1>} />
      <Route path="/settings" element={<h1>settings</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
