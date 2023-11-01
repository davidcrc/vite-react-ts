import "./App.scss";
import {
  About,
  Contact,
  Destination,
  Features,
  Footer,
  Navbar,
} from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
