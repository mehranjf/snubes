import { BrowserRouter } from "react-router-dom";
import Features from "./components/features";
import Header from "./components/header";
import Slider from "./components/slider";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Slider />
        <Features />
      </main>
    </BrowserRouter>
  );
}

export default App;
