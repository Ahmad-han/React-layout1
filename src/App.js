import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Cards } from "./components/Cards";
import { Orange } from "./components/Orange";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";




export const App = () => {
  return (
    <div className="App">
     <Header />
     <Section />
     <Cards />
     <Orange />
     <Article />
     <Footer />
    </div>
  );
}

