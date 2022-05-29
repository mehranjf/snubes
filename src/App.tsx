import { BrowserRouter } from "react-router-dom";
import Comment from "./components/comment";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Logo from "./components/logo";
import Slider from "./components/slider";
import Why from "./components/why";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Slider />
        <Features />
        <Why />
        <Comment />
        <Logo />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
