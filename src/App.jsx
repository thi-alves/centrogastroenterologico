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
  Terms,
  Faq,
} from "./components";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const target = document.querySelectorAll("[data-anime]");
    console.log(target);

    const animeScroll = () => {
      let windowTop =
        window.pageYOffset +
        (window.innerHeight * 0.75 ||
          document.body.clientHeight * 0.75 ||
          document.documentElement.clientHeight * 0.75);

          console.log(windowTop);
          console.log(element.offsetTop);

      //forEach() falar com cada elemento//

      target.forEach(function (element) {
        windowTop > element.offsetTop
          ? element.classList.add("anime-img")
          : element.classList.remove("anime-img");
      });
    };
    window.addEventListener("scroll", animeScroll);
  }, []);

  return (
    <div className="App overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      {/* <Terms /> */}
      <Team />
      <Book />
      <Button />
      <Schedule />
      <Partners />
      <Articles />
      <Contact />
      <Faq />
      <Footer />
      <Teste />
    </div>
  );
}

export default App;
