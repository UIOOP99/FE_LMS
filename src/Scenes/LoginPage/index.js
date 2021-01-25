import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { axiosInstance } from "services/axios/axios";
import { createTokenObj, LSService } from "services/LocalStorage/localStorage";
import { useHistory } from "react-router-dom";
import BannerNav from "../components/BannerNav"

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

  let history = useHistory()



  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(username);
    console.log(password);

    const data = {
        username : username ,
        password : password
    }
    axiosInstance.post("/login",data).then(res =>{
        LSService.setToken(createTokenObj(res.data.access.token, res.data.refresh.token))
        history.push("/")

    })
    .catch(err =>{
        alert(err)
        console.log(err)
    })

  
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
