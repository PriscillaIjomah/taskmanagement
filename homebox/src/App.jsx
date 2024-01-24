import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskmanager from "./Taskmanager";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Privacy from "./Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Privacy />}>
          <Route path="/task" element={<Taskmanager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
