import React from "react";
import {Profile, Skills, Contact, Experience, Projects} from "../containers"
import Navbar from "../components/navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MyRouter(){
    return(
        <Router>
            <Switch>
            <Navbar/>
            <Route exact path = "/" component = {Profile}/>
            <Route exact path = "/Skills" component = {Skills}/>
            <Route exact path = "/contact" component = {Contact}  />
            <Route exact path = "/experience" component = {Experience}  />
            <Route exact path = "/projects" component = {Projects}  />
            </Switch>
        </Router>
    )
}
export default MyRouter;