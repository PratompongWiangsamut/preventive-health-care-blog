import React, { Component } from "react";
import {  Form } from "react-bootstrap";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


/*const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
*/

export default class Login extends Component {
  state = {
    name: '',
    password: '',
    loggedIn: false,
    role: ''
  }

  //const classes = useStyles();

  handleSubmit = (e) => {
    e.preventDefault()
    const register = {
      name: this.state.name,
      password: this.state.password,
    };
    console.log("http://localhost:3000/api/user/login?name="+this.state.name+'&&password='+this.state.password)
    axios.get(
      "http://localhost:3000/api/user/login?name="+this.state.name+'&&password='+this.state.password
    ).then((res)=>{
      if(res.status==200){
        //this.setState({ loggedIn: true, role: res.data.role, name: res.data.name })
        localStorage.setItem('uid', res.data.uid)
        localStorage.setItem('role',res.data.role)
        localStorage.setItem('name',res.data.name)
      }
      console.log(this.state.name)
    });
    console.log(register)
    //window.location.reload()
  }


  name = (e) => {
    this.setState({ name: e.target.value })
  }

  password = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
/*
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={this.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
*/
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00fbff",
        }}
      >
        <div >

          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={this.name}/>
              <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.password}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="contained" color="primary" type="submit"onClick={this.handleSubmit}>
              Login
            </Button>
          </Form>
        </div>

      </div>
      
    );
  }
}

