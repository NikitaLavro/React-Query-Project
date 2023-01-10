//CSS
import "./App.css";

//Components
import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroPage from "./components/RQSuperHeroPage";

//Router
import { Routes, Route, Link } from "react-router-dom";

//React-Query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallelPage from "./components/DynamicParallelPage";
import DependentQueriesPage from "./components/DependentQueriesPage";
import PaginatedQueriesPage from "./components/PaginatedQueriesPage";
import InfiniteQueriesPage from "./components/InfiniteQueriesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
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
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="lavro.nikita123@gmail.com" />}
          />
          <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
          <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />

          <Route
            path="/rq-dynamic-parallel"
            heroIds={[1, 3]}
            element={<DynamicParallelPage />}
          />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />}>
            <Route path=":heroId" element={<RQSuperHeroPage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
