import {
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router";
import Layout from "./Components/Layout";
import { createBrowserHistory } from "history";
import Flight from "./Pages/Flight";

function App() {
  const history =
    createBrowserHistory();
  const router = [
    {
      path: "/",
      element: <Flight />,
    },
  ];
  return (
    <div className='App'>
      <Layout>
        <Routes history = {history}>
          {router.map((route, key) => (
            <Route
              path={route.path}
              element={route.element}
              key={key}
            />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
