import React from "react";
import Header from "./components/Header/Header";

// Import Global Styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "./assets/css/style.css"; // Main custom styles
import "./assets/css/fontawesome/css/font-awesome.min.css"; // FontAwesome
import "./assets/css/flaticon.min.css"; // Flaticon
import "./assets/css/animate.min.css"; // Animations
import "./assets/css/owl.carousel.min.css"; // Owl Carousel
import "./assets/css/bootstrap-select.min.css"; // Bootstrap Select
import "./assets/css/magnific-popup.min.css"; // Magnific Popup
import "./assets/css/loader.min.css"; // Loader
import Hero from "./components/Hero/Hero";
import HeroPage from "./components/HeroPage/HeroPage";

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <Hero />
    </>
  );
}

export default App;
