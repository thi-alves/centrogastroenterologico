import { Navbar, Hero, Services, About, Team } from "./components";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
    </div>
  );
}

export default App;
