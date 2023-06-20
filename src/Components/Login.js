import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = (e) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1");
    const { username, password } = e.target.elements;
    dispatch(authActions.login({ username: username.value, password: password.value }));
  };

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
          <Button
            sx={{
              color: "#636262",
              fontSize: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
            }}
          >
            Register
          </Button>
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
