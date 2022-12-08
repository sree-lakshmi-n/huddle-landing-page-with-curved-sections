import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Cta from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Stats />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
