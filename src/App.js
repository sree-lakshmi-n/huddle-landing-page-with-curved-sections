import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Features from "./components/Featues/Features";
import Cta from "./components/CTA/Cta";
function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Stats />
      <Features />
      <Cta />
    </div>
  );
}

export default App;
