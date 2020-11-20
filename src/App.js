import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

<<<<<<< Updated upstream

import MainPage from "./components/Main";
import Account from "./components/Account";
import { Route, Switch } from "react-router-dom";

=======
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MainPage from "./components/Main";
import Account from "./components/Account";
import { Route, Switch } from "react-router-dom";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/account" component={Account} />
        <Route component={Error} />
      </Switch>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
