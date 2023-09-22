// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../css/Navbar.css"
import logo1 from "../Images/rectangle-1@2x.png"
import logo2 from "../Images/logo1.png"
import { MDBIcon } from 'mdb-react-ui-kit';



export default function AppNavbar(){

    return(
        <>
       
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className='s fixed-top'>
                <Container fluid>
                    <Navbar.Brand href="https://domingoedc.me/">
                        <img src={logo1} alt='logo' className='logo' ></img>
                        <img src={logo2} alt='logo' className='logo2'></img>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggle' >
                        <MDBIcon fas icon="bars" size='2x' className='barLogo'/>
                    </Navbar.Toggle>
                    
                    <Navbar.Offcanvas
                    
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end" 
                    className="navBody"
                    >
                    <Offcanvas.Header closeButton>
                    {/* <MDBIcon fas icon="bars" /> */}
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/" className='text-center l1'>Home</Nav.Link>
                        <Nav.Link href="/#projects" className='text-center l1'>Projects</Nav.Link>
                        <Nav.Link href="/about-me" className='text-center l1'>About Me</Nav.Link>
                        <Nav.Link href="/contact" className='text-center l1'>Contact</Nav.Link>
                        <Nav.Link href="/blog" className='text-center l1'>Blog</Nav.Link>


                        {/* <NavDropdown
                            title="Dropdown"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Offcanvas.Body>
                        <img src={logo1} alt="logo" height={75} width={75} className='ftlogo'></img>
                        <h6 className='text-center mb-3'><a href='https://domingoedc.me/' className='footer'> © domingoedc.me</a></h6>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </>

    );
}