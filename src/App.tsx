import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
