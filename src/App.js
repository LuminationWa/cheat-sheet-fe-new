import Nav from "./Components/Nav";
import Login from "./Components/Login";
import CheatsheetOverview from "./Components/CheatsheetOverview";
import DefaultMain from "./Components/DefaultMain";
import { useDispatch, useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={loginStatus ? <CheatsheetOverview /> : <DefaultMain />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
