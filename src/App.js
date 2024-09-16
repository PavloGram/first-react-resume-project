import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Programs from "./Components/Programs/Programs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </>
  );
}

export default App;
