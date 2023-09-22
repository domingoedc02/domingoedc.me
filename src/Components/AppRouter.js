import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import { Container } from "react-bootstrap";
import Home from "../Pages/Home";
import AppFooter from "./AppFooter";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";


export default function AppRouter(){

    return(
        <BrowserRouter>
            <AppNavbar/>
            <Container fluid>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/about-me" Component={AboutMe}/>
                    <Route exact path="/contact" Component={Contact}/>
                    
                </Routes>

            </Container>
            <AppFooter/>
        </BrowserRouter>
    );
}