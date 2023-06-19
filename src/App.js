import Nav from "./Components/Nav";
import Login from "./Components/Login";
import CheatsheetOverview from "./Components/CheatsheetOverview";
import DefaultMain from "./Components/DefaultMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={user ? <CheatsheetOverview /> : <DefaultMain />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
