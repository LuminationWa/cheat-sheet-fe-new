import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

const SignUp = () => {
    return (
        <main className="signup-main">
            <div className="sign-up">
                <h1 className="h1">Register</h1>
                <form
                    action="sign-up"
                    method="post"
                    className="register-form"
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
                        <TextField
                            name="confirm-password"
                            id="confirm-password"
                            label="Confirm Password"
                            variant="outlined"
                        />
                        <TextField
                            name="email"
                            id="email"
                            label="Email"
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
                            Register
                        </Button>
                    </FormGroup>
                </form>
            </div>
        </main>
    )
}

export default SignUp;