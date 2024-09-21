import { useState } from "react";
import Footer from "../src/Components/Footer/Footer";
import NavBar from "../src/Components/NavBar/NavBar";
import Hero from "../src/Components/Hero/Hero";
import VideoPlayer from "../src/Components/VideoPlayer/VideoPlayer";
import Title from "../src/Components/Title/Title";
import Programs from "../src/Components/Programs/Programs";
import About from "../src/Components/About/About";
import Campus from "../src/Components/Campus/Campus";
import Testimonials from "../src/Components/Testimonials/Testimonials";
import Contacts from "../src/Components/Contact/Contacts";



function App() {
  const[play, setPlay] = useState(false)

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title title={"Our PROGRAM"} subTitle={"What we ofer"} />
        <Programs />
        <About setPlay={setPlay}/>
        <Title title={"Gallery"} subTitle={"Camnpus photos"} />
        <Campus />
        <Title title={"Testimonials"} subTitle={"What Students say"} />
        <Testimonials />
        <Title title={"Contact us"} subTitle={"Get in touch"} />
        <Contacts />

      </div>
              <Footer />
      <VideoPlayer setPlay={setPlay} play={play} />
    </div>
  );
}

export default App;
