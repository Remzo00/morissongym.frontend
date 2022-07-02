import { Routes, Route } from "react-router-dom";
import Login from "./screens/login";
import Navbar from "./components/navbar";
import Members from "./screens/members";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Nesto</h1>} />
      <Route path="/members" element={<Members />} />
      <Route path="/coach" element={<h1>coach</h1>} />
      <Route path="/settings" element={<h1>settings</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
