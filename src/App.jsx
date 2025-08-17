import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { ScrollProvider } from "./ScrollContext";
import About from "./Components/About/About";
import Amenities from "./Components/Amenities/Amenities";
import Attractions from "./Components/Attractions/Attractions";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Rooms from "./Components/Rooms/Room";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonials/Testimonial";
import WhatsAppButton from "./Components/Banners/WhatsAppButton";
import Planner from "./Components/Planner/Planner";

function HomePage() {
  return (
    <ScrollProvider>
      <Nav />
      <Header />
      <About />
      <Services />
      <Rooms />
      <Amenities />
      {/* <Testimonial /> */}
      {/* <Attractions /> */}
      <Footer />
      <WhatsAppButton />
    </ScrollProvider>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/planner"
        element={
          <>
            <Planner />
            <Footer />
            <WhatsAppButton />
          </>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}

export default App;
