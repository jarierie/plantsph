import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store";

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
