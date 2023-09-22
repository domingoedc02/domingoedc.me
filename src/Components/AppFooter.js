import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../css/Footer.css";
import logo from "../Images/rectangle-1@2x.png"
import fb from "../Images/facebook-circled@2x.png"
import ig from "../Images/instagram-circle@2x.png"
import twt from "../Images/twitter-circled@2x.png"
import git from "../Images/github1@2x.png"
import linkedin from "../Images/linkedin-circled@2x.png"
import {
    MDBInputGroup,
    MDBBtn
  } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AppFooter(){

    return (
        <>
            <Container  className="cont">
                <Row>
                    <Col lg={6} sm={12}>
                        <h5 className="">Contact</h5>
                        <p>
                        Please do not hesitate to contact me at any moment. I prefer to communicate via email, especially since we may be in different time zones.
                        
                        </p>
                        
                        
                    </Col>
                    <Col className="mt-lg-4 mt-md-0">
                        <h6 ><strong>Email:</strong> <a href="mailto:contact@domingoedc.me?subject=Inquiry!" className="li">contact@domingoedc.me</a></h6>
                        <h6><strong>Viber:</strong> <a href="viber://chat?number=+639955739787" className="li">(+63) 995 573 9787</a></h6>
                    </Col>
                    {/* <Col lg={6} sm={12}>
                        <h5>Subscribe</h5>
                        <p>Subscribe to receive updates on my latest web projects, designs, and advice!</p>
                        <MDBInputGroup className='mb-3 w-75'>
                            <input className='form-control' placeholder="Enter your email address" type='email' />
                            <MDBBtn className="btn btn-secondary">Submit</MDBBtn>
                        </MDBInputGroup>
                    </Col> */}
                </Row>
                <Row className="mb-3">
                    <Col lg={2} md={2} sm={6} xs={6} className="about"> 
                        <h5>About ー</h5>
                        <div>
                            <a href="#" className="d-block li">Home</a>
                            <a href="#" className="d-block li">Projects</a>
                            <a href="#" className="d-block li">About Me</a>
                            <a href="#" className="d-block li">Contact</a>
                            <a href="#" className="d-block li">Blog</a>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={6} xs={6}>
                        <h5>Projects ー</h5>
                        <div>
                            <a href="#" className="d-block li">Mochimoto</a>
                            <a href="#" className="d-block li">Hostmo</a>
                            <a href="#" className="d-block li">iDevph</a>
                            <a href="#" className="d-block li">Hein</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <h5>Current Availability ー</h5>
                        <p>
                            I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!
                        </p>
                    </Col>
                    <Col lg={2} md={3} sm={6} xs={6} >
                        <h5>Socials ー</h5>
                        <div>
                            <a href={`${process.env.REACT_APP_FACEBOOK}`} target="_blank" className="d-block li" ><img src={fb} alt="fb" height={30}  width={30} ></img>
                            Facebook</a>
                            <a href={`${process.env.REACT_APP_INSTAGRAM}`} target="_blank" className="d-block li"><img src={ig} alt="fb" height={30}  width={30}></img>
                            Instagram</a>
                            <a href={`${process.env.REACT_APP_TWITTER}`} target="_blank" className="d-block li"><img src={twt} alt="fb" height={30}  width={30}></img>
                            Twitter</a>
                            <a href={`${process.env.REACT_APP_GITHUB}`} target="_blank" className="d-block li"><img src={git} alt="fb" height={30}  width={30}></img>
                            Github</a>
                            <a href={`${process.env.REACT_APP_LINKEDIN}`} target="_blank"  className="d-block li"><img src={linkedin} alt="fb" height={30}  width={30}></img>
                            LinkedIn</a>
                            {/* <Button className="d-block"> 
                                </Button>
                            <Button className="d-block">Twitter</Button>
                            <Button className="d-block">Instagram</Button>
                            <Button className="d-block">Github</Button>
                            <Button className="d-block">Linkedin</Button> */}
                        </div>
                    </Col>
                    <Col lg={3} md={{order: 'last', span: 8}} sm={6} xs={12}>
                        <h5>Subscribe ー</h5>
                        <p>Subscribe to receive updates on my latest web projects, designs, and advice!</p>
                        <Form>
                            <MDBInputGroup className='mb-3 '>
                                <input className='form-control' placeholder="Enter your email address" type='email' />
                                <MDBBtn className="btn btn-secondary" type="submit">Submit</MDBBtn>
                            </MDBInputGroup>
                        </Form>
                    </Col>
                    <Col lg={{order: "last", span: 12}} md={4} className="footer">   
                        <div className="mt-lg-3">
                            <img src={logo} alt="logo" className="logo"></img>
                            <h6 className="text-center">© 2023 Edson John Domingo</h6>
                            <h6 className="text-center">domingoedc.me</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        
        </>
    );
}