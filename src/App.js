import Nav from "./Components/Nav";
import Login from "./Components/Login";
import CheatsheetOverview from "./Components/CheatsheetOverview";
import DefaultMain from "./Components/DefaultMain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { fetchCheatsheets } from "./redux/cheatsheetsThunks";

function App() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state
  const test = useSelector(state => state.cheatsheets.userCheatsheets);
  useEffect(() => {
    if (loginStatus) {
      dispatch(fetchCheatsheets(localStorage.userId));      
    }
  }, [loginStatus])
  useEffect(() => {
    console.log("Cheatsheets", test)
  }, [test])
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
