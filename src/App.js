import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
