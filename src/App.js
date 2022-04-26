import { Route, Routes } from "react-router-dom";
// --------------------------------------------------------------------
import "./App.scss";
import Footer from "./components/Footer";
// --------------------------------------------------------------------
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import ChooseCarDetails from "./screens/ChooseCarDetails";
import CarWashPlans from "./screens/CarWashPlans";
// --------------------------------------------------------------------

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chooseCarDetails" element={<ChooseCarDetails />} />
        <Route path="/carWashPlans" element={<CarWashPlans />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
