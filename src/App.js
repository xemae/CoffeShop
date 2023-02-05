import './App.css';
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Coffee from "./components/Coffee/Coffee";
import Giftset from "./components/Giftset/Giftset";
import Combo from "./components/Combo/Combo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Benefits />
        <Coffee />
        <Giftset />
        <Combo />
        <Footer />

    </div>
  );
}

export default App;