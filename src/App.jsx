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
    <div className="App overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Team />
      <Book />
      <Button />
      <Schedule />
      <Articles />
      <Testimonials/>
      <Downloads/>
      <Partners />
      <Contact />
      <Faq />
      <Footer />
      <Teste />
    </div>
  );
}

export default App;
