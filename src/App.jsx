import { Navbar, Hero, Services, About, Team, Book, Button, Articles, Contact, Footer, Teste, Schedule, Partners, Terms, Faq } from "./components";


function App() {
  return (
    <div className="App overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Terms/>
      <Team />
      <Book />
      <Button />
      <Schedule />
      <Partners />
      <Articles />
      <Contact />
      <Faq />
      <Footer />
      <Teste/>
    </div>
  );
}

export default App;
