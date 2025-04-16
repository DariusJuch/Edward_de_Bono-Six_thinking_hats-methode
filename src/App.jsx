import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowToUse from "./components/HowToUse";
import ThinkingHats from "./components/ThinkingHats";
import HeroSection from "./components/HeroSection";
import image from './assets/6.jpeg';

function App() {
  return (
    <div
    style={{backgroundImage: `url(${image})`}}
    >
      <Header/>
      <HeroSection/>
      <ThinkingHats/>
      <HowToUse/>
      <Footer/>
    </div>
  );
}

export default App;
