import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useUserDispatch, useUserState } from "services/Contexts/UserContext";
import { EUserActionTypes } from "services/Contexts/UserContext/models";
import BannerNav from "../components/BannerNav";

// server.schema.create("user", {
//   fullName: "صادق فرامرزی",
//   idNumber: "963613051",
//   avatarUrl: `https://i.pravatar.cc/150?u=${963613051}`,
//   role :'student'
// }) as any;
// server.schema.create("user", {
//   fullName: "بابک مرادی",
//   idNumber: "1213141516",
//   avatarUrl: `https://i.pravatar.cc/150?u=${1213141516}`,
//   role : 'professor'
// }) as any;
const fakeUsers = [
  {
    username: "963613051",
    password: 1,
  },
  {
    username: "123456789",
    password: 1,
  },
];

let useStyles = makeStyles((theme) => ({
  loginForm: {
    justifyContent: "center",
    minHeight: "90vh",
    width: window.innerWidth > 500 ? 500 : 300,
    maxWidth: 700,
  },
  buttonBlock: {
    width: "100%",
  },
  loginBackground: {
    justifyContent: "center",
    minHeight: "30vh",
    padding: "50px",
  },
}));

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

// id : number ;
// username: string;
// fullName?: string,
// idNumber?: string,
// avatarUrl?: string,
// isAuth: boolean;
// role: keyof IRules;
function Login() {
  let username: string, password: string;
  const classes = useStyles();
  const userDispatch = useUserDispatch();
  const user = useUserState();
  console.log(user);

  const handleChange = (event: any) => {
    if (event.target.name == "username") username = event.target.value;
    else password = event.target.value;
  };

  let history = useHistory();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const canLogin = fakeUsers.some(
      (f) =>
        Number(f.username) === Number(username) &&
        Number(f.password) === Number(password)
    );
    console.log(canLogin);
    if (canLogin) {
      userDispatch({
        type: EUserActionTypes.LOGIN,
        payload: {
          id: Math.random(),
          role: username === "963613051" ? "student" : "professor",
          isAuth: true,
          username: username,
          idNumber: username,
          avatarUrl: `https://i.pravatar.cc/150?u=${username}`,
          fullName: username === "963613051" ? "صادق فرامرزی" : "بابک مرادی",
        },
      });
      await wait(500);
      history.push("/");
    }
  };

  return (
    <div>
      <BannerNav />
      <Grid container justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.loginForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.loginBackground}
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  ورود
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="شماره دانشجویی"
                        fullWidth
                        name="username"
                        variant="outlined"
                        // value={username}
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="رمز عبور"
                        fullWidth
                        name="password"
                        variant="outlined"
                        // value={password}
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className={classes.buttonBlock}
                      >
                        ورود
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
