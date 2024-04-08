import { hero1 } from "./assets";
import {
  Navbar,
  Hero,
  Services,
  About,
  Team,
  Book,
  Button,
  Articles,
  Contact,
  Footer,
  Teste,
  Schedule,
  Partners,
  Faq,
  Downloads,
  Testimonials,
  WithUs,
} from "./components";
import Heroo from "./components/Heroo";
import Our_Structure from "./components/Our_Structure";

function App() {
  return (
    <div className="relative overflow-x-hidden z-0">
      <Heroo />
      <div
        className="bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {<Navbar />}
        <Hero />
      </div>
      <div className="bg-secondary/[2%] shadow-sm py-10">
        <About />
      </div>
      <Services />
      <Faq />
      <Team />
      <Book />
      <Button />
      <Schedule />
      <Partners />
      <Articles />
      <Contact />
      <Testimonials />
      <Downloads />
      <WithUs />
      <Footer />
      <Teste />
    </div>
  );
}

export default App;
