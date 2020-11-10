import logo from "./logo.svg";
import "./App.css";
import Agriculture from "./Components/Agriculture";
import EktaParty from "./Components/Ekta-party";
import Skills from "./Components/Skills";
import Training from "./Components/Training";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Agriculture />
      <EktaParty />
      <Skills />
      <Training />
    </div>
  );
}

export default App;
