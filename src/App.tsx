import "./App.css";
import { Features, Navbar } from "./components";
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
      </main>
    </div>
  );
}

export default App;
