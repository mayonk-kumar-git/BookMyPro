import { Route, Routes } from "react-router-dom";
// --------------------------------------------------------------------
import "./App.scss";
import Footer from "./components/Footer";
// --------------------------------------------------------------------
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import ChooseCarServiceDetails from "./screens/ChooseCarServiceDetails";
import CarServiceDetailsProvider from "./components/Contexts/CarServiceDetailsProvider.jsx";
// --------------------------------------------------------------------

function App() {
  return (
    <>
      <CarServiceDetailsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/chooseCarServiceDetails"
            element={<ChooseCarServiceDetails />}
          />
        </Routes>
        <Footer />
      </CarServiceDetailsProvider>
    </>
  );
}

export default App;