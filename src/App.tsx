import "./App.scss";
import { About, Destination, Features, Navbar } from "./components";
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
      </main>
    </div>
  );
}

export default App;
