import Nav from "./Components/Nav";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
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
import { loggedIn } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state
  useEffect(() => {
    if (localStorage.token) {
      //Keeps up the other components also dependant on the logged in status
      dispatch(loggedIn());
    }
  }, [localStorage.token])
  useEffect(() => {
    if (loginStatus) {
      dispatch(fetchCheatsheets(localStorage.userId));
    }
  }, [loginStatus])
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
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
