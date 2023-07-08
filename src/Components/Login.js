import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { login } from "../redux/authThunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Login = (e) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    dispatch(login({ username: username.value, password: password.value })); //Handles localStorage updates and redirects
  };

  useEffect(() => {
    if (loginStatus) navigate('/');
  }, [loginStatus])

  return (
    <main className="login-main">
      <div className="sign-in">
        <h1 className="h1">Sign in</h1>
        <form
          action=""
          method="post"
          className="login-form"
          onSubmit={handleSubmit}
        >
          <FormGroup className="form-group-1">
            <TextField
              name="username"
              id="username"
              label="User name"
              variant="outlined"
            />
            <TextField
              name="password"
              id="password"
              label="Password"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                color: "#fdf6f7",
                backgroundColor: "#c1252d",
                marginTop: "1rem",
                ":hover": {
                  background: "hsl(357, 68%, 35%)",
                },
              }}
            >
              Sign in
            </Button>
            <FormControlLabel
              control={<Checkbox />}
              label="Keep me logged in"
            />
          </FormGroup>
        </form>
        <div className="login-utlity-btns">
          <Link to="/signup">
            <Button
              sx={{
                color: "#636262",
                fontSize: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
              }}
            >
              Register
            </Button>
          </Link>
          <Button
            sx={{
              color: "#636262",
              fontSize: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
            }}
          >
            Forgot your password?
          </Button>
          <Button
            sx={{
              color: "#636262",
              fontSize: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
            }}
          >
            Log in by email
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Login;
