import "./App.css";
import Nav from "./components/Nav";
import CardItem from "./components//CardItem";
import FeatureArticle from "./components/FeatureArticle";
import FooterDiv from "./components/Footer";
import Hero from "./components/Hero";
import TestComponent from "./components/TestComponent";
import { Provider } from "react-redux";
import store from "./store/store";
import CardExample from "./components/CardExample";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
