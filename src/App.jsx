import { Route, Routes } from "react-router-dom";
import Navbar from "./login/common/Navbar";
import CreateCompany from "./login/CreateCompany";
import CreateUser from "./login/CreateUser";
import LogicSocialOnly from "./login/LoginSocialOnly"
import Footer from "./login/common/Footer";
import BottomLeftImg from "./assets/images/png/bottom-left.png"
import BottomRightImg from "./assets/images/png/bottom-right.png"

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/create-company" element={<CreateCompany />} />
        <Route path="/create-user" element={<LogicSocialOnly />} />
        <Route path="/login" element={<CreateUser />} />
      </Routes>
      <Footer />
      <img className="absolute -bottom-[270px] left-0" src={BottomLeftImg} alt="bottom-left" />
      <img className="absolute bottom-0 -right-4 max-lg:hidden" src={BottomRightImg} alt="bottom-right" />
    </div>
  );
}

export default App;