import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowToUse from "./components/HowToUse";
import ThinkingHats from "./components/ThinkingHats";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ThinkingHats/>
      <HowToUse/>
      <Footer/>
    </div>
  );
}

export default App;
