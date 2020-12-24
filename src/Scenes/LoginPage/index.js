import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  makeStyles,
} from "@material-ui/core";
import Axios from "axios";

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

function Login() {
  let username, password;
  let width;
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.name == "username") username = event.target.value;
    else password = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "";
    console.log(username);
    console.log(password);

    // const data = {
    //     username : username ,
    //     password : password
    // }
    // Axios.post(url,data).then(res =>{
    //     console.log(res.token);
    // })
    // .catch(err =>{
    //     console.log(err)
    // })
  };

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">
                سامانه مدیریت یادگیری دانشگاه اصفهان
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

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
