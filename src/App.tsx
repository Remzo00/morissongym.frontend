import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
<<<<<<< HEAD
import Members from "./screens/members";
=======
import AddCoach from "./screens/addCoach/AddCoach";
>>>>>>> e7c63451e862793bc96bee86273f0f83a3a57f1d

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
