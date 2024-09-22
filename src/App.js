import { useState } from "react";
import Footer from "../src/Components/Footer/Footer";
import NavBar from "../src/Components/NavBar/NavBar";
import Hero from "../src/Components/Hero/Hero";
import VideoPlayer from "../src/Components/VideoPlayer/VideoPlayer";
import Programs from "../src/Components/Programs/Programs";
import About from "../src/Components/About/About";
import Campus from "../src/Components/Campus/Campus";
import Testimonials from "../src/Components/Testimonials/Testimonials";
import Contacts from "../src/Components/Contact/Contacts";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <NavBar />
      <Hero />
      <main className="container">
        <Programs />
        <About setPlay={setPlay} />
        <Campus />
        <Testimonials />

        <Contacts />
      </main>
      <Footer />
      <VideoPlayer setPlay={setPlay} play={play} />
    </>
  );
}

export default App;
