import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import ItemPage from "./components/ItemPage";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          {/* <Cursor /> */}
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
            <Route path='/shop/:name' component={ItemPage}></Route>
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
