import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Comment from "./components/comment";
import Faq from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Logo from "./components/logo";
import Slider from "./components/slider";
import Why from "./components/why";
import { RootState } from "./redux/store";

function App() {
  const company = useSelector((state: RootState) => state.contact.company);
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Slider />
        <Features />
        <Why />
        <Comment />
        <Logo />
        {company ? null : <Faq />}
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
