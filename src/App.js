import { Route, Routes } from "react-router-dom";
// --------------------------------------------------------------------
import "./App.scss";
// --------------------------------------------------------------------
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import ChooseCarServiceDetails from "./screens/ChooseCarServiceDetails";
import CarServiceDetailsProvider from "./components/Contexts/CarServiceDetailsProvider";
import CustomerDetailsProvider from "./components/Contexts/CustomerDetailsProvider";
import Services from "./screens/Services";
import Payment from "./screens/Payment";
import MyCart from "./screens/MyCart";
import MyProfile from "./screens/MyProfile";
import AboutUs from "./screens/AboutUs";
// --------------------------------------------------------------------

function App() {
  return (
    <>
      <CustomerDetailsProvider>
        <CarServiceDetailsProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/chooseCarServiceDetails"
              element={<ChooseCarServiceDetails />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/myCart" element={<MyCart />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
        </CarServiceDetailsProvider>
      </CustomerDetailsProvider>
    </>
  );
}

export default App;
