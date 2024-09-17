import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <Title/>
        <Programs />
      </div>
    </>
  );
}

export default App;
