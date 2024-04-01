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
      {/* <Navbar /> */}
      <Heroo />
      <Hero />
      <div className="bg-secondary/[2%] shadow-sm py-10">
        <About />
      </div>
      <Services />
      <Faq />
      <Team />
      <Book />
      <Button />
      <Schedule />
      <Articles />
      <Contact />
      <Testimonials />
      <Downloads />
      <WithUs />
      <Partners />
      <Footer />
      <Teste />
    </div>
  );
}

export default App;
