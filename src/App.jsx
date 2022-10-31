import { Navbar, Hero, Services, About, Team, Book, Button } from "./components";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Book />
      <Button />
    </div>
  );
}

export default App;
