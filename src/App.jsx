import { Route, Routes } from "react-router-dom";
import Navbar from "./login/common/Navbar";
import CreateCompany from "./login/CreateCompany";
import CreateUser from "./login/CreateUser";
import LogicSocialOnly from "./login/LoginSocialOnly"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create-company" element={<CreateCompany />} />
        <Route path="/create-user" element={<LogicSocialOnly />} />
        <Route path="/login" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;