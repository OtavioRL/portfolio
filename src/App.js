import FirstSection from "./components/firstSection";
import NavBar from "./components/navbar";
import SecondSection from "./components/secondSection";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col md:h-screen">
        <NavBar/>
        <FirstSection/>
      </div>
      <SecondSection/>
    </div>
  );
}

export default App;
