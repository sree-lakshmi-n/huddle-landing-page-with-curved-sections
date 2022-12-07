import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Stats />
    </div>
  );
}

export default App;
