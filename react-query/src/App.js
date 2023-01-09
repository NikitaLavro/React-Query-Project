//CSS
import "./App.css";

//Components
import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import SuperHeroesPage from "./components/SuperHeroesPage";

//Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/s" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
