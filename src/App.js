import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products/Products";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Navber from "./Pages/Shared/Navber/Navber";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import ExploreProducts from "./Pages/Products/ExploreProducts/ExploreProducts";
import PlaceOrder from "./Pages/Products/PlaceOrder/PlaceOrder";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/exploreProducts/:watchId">
            <ExploreProducts></ExploreProducts>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashBoard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
