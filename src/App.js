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

function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Hero />
        <CardItem />
        <FeatureArticle />
        <TestComponent />
        <CardExample />
        <FooterDiv />
      </Provider>
    </>
  );
}

export default App;
