import { Route, Routes } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
// --------------------------------------------------------------------
import "./App.scss";
// --------------------------------------------------------------------
// ****************************************************
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import ChooseCarServiceDetails from "./screens/ChooseCarServiceDetails";
import CarServiceDetailsProvider from "./components/Contexts/CarServiceDetailsProvider";
import CustomerDetailsProvider from "./components/Contexts/CustomerDetailsProvider";
import CarWashServiceDetailsProvider from "./components/Contexts/CarWashServiceDetailsProvider";
import Services from "./screens/Services";
import Payment from "./screens/Payment";
import MyCart from "./screens/MyCart";
import MyProfile from "./screens/MyProfile";
import AboutUs from "./screens/AboutUs";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";
import ContactUs from "./screens/ContactUs";
// ****************************************************
import MobileLandingPage from "./screens/Mobile/MobileLandingPage";
import MobileMyProfile from "./screens/Mobile/MobileMyProfile";
import MobileMyCars from "./screens/Mobile/MobileMyCars";
import MobileSubscriptionsScreen from "./screens/Mobile/MobileSubscriptionsScreen";
import MobileSlotPreference from "./screens/Mobile/MobileSlotPreference";
import MobileMyCart from "./screens/Mobile/MobileMyCart";
// --------------------------------------------------------------------

function App() {
  return (
    <>
      <CustomerDetailsProvider>
        <CarServiceDetailsProvider>
          <CarWashServiceDetailsProvider>
            {isMobileOnly ? (
              <>
                <Routes>
                  <Route path="/" element={<MobileLandingPage />} />
                  <Route path="/myProfile" element={<MobileMyProfile />} />
                  <Route path="/myCars" element={<MobileMyCars />} />
                  <Route
                    path="/subscriptions"
                    element={<MobileSubscriptionsScreen />}
                  />
                  <Route
                    path="/preferences"
                    element={<MobileSlotPreference />}
                  />
                  <Route path="/myCart" element={<MobileMyCart />} />
                </Routes>
              </>
            ) : (
              <>
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
                  <Route path="/contactUs" element={<ContactUs />} />
                  <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                  <Route
                    path="/termsAndConditions"
                    element={<TermsAndConditions />}
                  />
                </Routes>
                <Footer />
              </>
            )}
          </CarWashServiceDetailsProvider>
        </CarServiceDetailsProvider>
      </CustomerDetailsProvider>
    </>
  );
}

export default App;
