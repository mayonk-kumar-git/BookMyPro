import { Route, Routes } from "react-router-dom";
// --------------------------------------------------------------------
import "./App.scss";
import Footer from "./components/Footer";
// --------------------------------------------------------------------
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
// --------------------------------------------------------------------

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
