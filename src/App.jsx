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
} from "./components";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* <Navbar /> */}
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
      <Testimonials />
      <Downloads />
      <Partners />
      <Contact />
      <Footer />
      <Teste />
    </div>
  );
}

export default App;
