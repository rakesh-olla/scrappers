import { Route, Routes } from "react-router-dom";
import CreateCompany from "./login/CreateCompany";
import LoginSocialOnly from "./login/LoginSocialOnly";
import CreateUser from './login/CreateUser'
import Navbar from './login/common/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<CreateCompany />} />
        <Route path="/login/social" element={<LoginSocialOnly />} />
        <Route path="/login/social/create-account" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;