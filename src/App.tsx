import { Routes, Route } from "react-router-dom";
import AddMemberDialog from "./components/AddMemberDialog/AddMemberDialog";
import Login from "./screens/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddMemberDialog />} />
      <Route path="/members" element={<h1>Members</h1>} />
      <Route path="/coach" element={<h1>coach</h1>} />
      <Route path="/settings" element={<h1>settings</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
