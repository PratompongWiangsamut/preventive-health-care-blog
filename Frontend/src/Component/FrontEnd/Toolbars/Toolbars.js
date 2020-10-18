import React, { Component } from 'react';
import { Navbar, Nav,Form,FormControl} from "react-bootstrap";
import {
  Route,
  /*NavLink,
  Switch,
  Redirect,*/
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Home/Home";
import Write from "../Write/Write";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Register from "../Register/Register";
import Tag from "../Tag/Tag"
import Readpost from "../Readpost/Readpost";
import Search from "../Search/Search"
import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';






export default class Toolbars extends Component {
  Logout = () =>{
    localStorage.clear()
    
}
  state={
    title:''
  }
  title = (e) => {
    this.setState({ title: e.target.value })
  }

  

  render() {
    /*let AdminButton = !!localStorage.getItem('role')=='Admin' ? (
      return <Dropdown.Item href="/admin">Admin</Dropdown.Item>
    ):(
      console.log('error ')
    )*/
  
  return (
    <Router>
      <div>
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Preventive Health Care Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <DropdownButton id="dropdown-basic-button" title="แท็ก" variant="info" >
                    <Dropdown.Item href={"/tag/การกิน"}><FastfoodIcon/>การกิน</Dropdown.Item>
                    <Dropdown.Item href={"/tag/การออกกำลังกาย"}><DirectionsRunIcon/>การออกกำลังกาย</Dropdown.Item>
                    <Dropdown.Item href={"/tag/การพักผ่อน"}><HotelIcon/>การพักผ่อน</Dropdown.Item>
                    <Dropdown.Item href={"/tag/ความเสี่ยงโรค"}><LocalHospitalIcon/>ความเสี่ยงโรค</Dropdown.Item>
                    </DropdownButton>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.title}/>
                   <Button variant="contained" href={"/search/"+this.state.title}><SearchOutlinedIcon/></Button>
                </Form>
               
                
                
              </Nav>
              <Nav.Link href="/write">เขียนบทความ</Nav.Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >{!localStorage.getItem('uid')
                    ?<DropdownButton id="dropdown-basic-button"
                     title={<AccountCircleIcon/>}
                     variant="secondary"
                     >
                    <Dropdown.Item href="/login" ><LockOpenOutlinedIcon/>Login</Dropdown.Item>
                    <Dropdown.Item href="/register"><LibraryBooksOutlinedIcon/>Register</Dropdown.Item>
                    </DropdownButton>
                    :<DropdownButton id="dropdown-basic-button"
                    title={localStorage.getItem('name')} 
                    variant="secondary"
                    >
                   <Dropdown.Item href="/profile"><AccountCircleIcon/>Profile</Dropdown.Item>
                   {/* {localStorage.getItem('role')}                    */}
                   {(localStorage.getItem('role')=='Admin')?(
                      <Dropdown.Item href="/admin"><SupervisorAccountIcon/>Admin</Dropdown.Item>
                    ):(
                      <></>
                    )}
                   <Dropdown.Item onClick={this.Logout}><MeetingRoomIcon/>Logout</Dropdown.Item>
                   
                   </DropdownButton>}
                  </div>
                  <Button variant="contained" color="primary" >ทำแบบสอบถาม</Button>
                  
              
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Route path="/home" component={Home} />
        <Route path="/write" component={Write} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/register" component={Register} />
        <Route path="/tag" component={Tag} />
        <Route path="/readpost" component={Readpost} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}
}
