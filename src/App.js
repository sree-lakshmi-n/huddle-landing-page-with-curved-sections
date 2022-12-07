import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Features from "./components/Featues/Features";
function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Stats />
      <Features />
    </div>
  );
}

export default App;
