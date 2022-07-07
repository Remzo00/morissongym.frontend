import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Members from "./screens/members";
import AddCoach from "./screens/addCoach/AddCoach";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/coach" element={<AddCoach />} />
      <Route path="/" />
      <Route path="/settings" element={<h1>settings</h1>} />
      <Route path="/members" element={<Members/>} />
    </Routes>
  );
};
export default App;
