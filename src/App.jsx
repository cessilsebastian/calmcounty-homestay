import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
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

export default App;
