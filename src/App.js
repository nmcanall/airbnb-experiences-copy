import './styles/App.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CardLine from "./components/CardLine";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CardLine/>
    </div>
  );
}

export default App;
