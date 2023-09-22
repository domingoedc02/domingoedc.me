import { Container, Row, Col, Form } from "react-bootstrap";
import mypic from "../Images/mypic@2x.png"
import "../css/AboutMe.scss"
import { MDBIcon } from "mdb-react-ui-kit";
import cert1 from "../Images/rectangle-10@3x.png"
import cert2 from "../Images/rectangle-13@3x.png"
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBSpinner,
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";


export default function AboutMe(){
    const [topRightModal, setTopRightModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isResumeSent, SetIsResumeSent] = useState(false)
    const [isDisable, setIsDisable] = useState(false)
    const [email, setEmail] = useState("")

    document.title = "About Me"

    const toggleShow = () => {
        setIsDisable(false)
        SetIsResumeSent(false)
        setTopRightModal(!topRightModal)
    };

    if (loading){

    }



    function requestBtn(){
        setLoading(true)
        setIsDisable(true)
        fetch(`${process.env.REACT_APP_SERVER_URL}/mail/request-resume`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })

        })
        .then(response => response.json())
        .then(result => {
            
            // window.location.href = "facebook.com"
            console.log(result)
        })
        .finally(() => {
            setIsDisable(true)
            SetIsResumeSent(true)
            setLoading(false)
        })
    }
    function resumeBody(){
        if(isResumeSent === false) {
            return(
                <>
                    <h6 className="resBody">I wanted to confirm that I will be sending my resume to your desired email address shortly. Please keep an eye on your inbox.</h6>
                                           
                    <div className="emailForm">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </>
            )
        } else{
            return (
                <>
                    <h6 className="text-center">Thank you for your request for my resume. I appreciate your interest and am pleased to provide it as requested.</h6>
                    <h6 className="text-center">
                    Please find attached my resume for your review. If you have any questions or need further information, please feel free to reach out.
                    </h6>
                    <h6 className="text-center">
                    I look forward to the opportunity to discuss my qualifications with you.
                    </h6>
                </>
            )
        }
    }
    function requestText(){
        if(loading === true){
            return (
                <>
                    <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                    Loading...
                </>
            );
        } else {
            return(
                <>
                    Request
                </>
            )
        }
    }


    return(
        <>
            <Container>
                <Row className="aboutRow mb-5">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="box1">

                        </div>
                        <div className="box2">

                        </div>
                        <div className="box3">

                        </div>
                        <div className="box4">

                        </div>


                        <img src={mypic} alt="profile" height={430} className="mypic"></img>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="about-me-box">
                            <h3>ABOUT ME</h3>
                            <p>I'm Edson John Domingo born and raised in the Philippines, studied Bachelor of Science in Computer Science specialization in Machine Learning at National University Philippines. I enjoy coding even it's hard.</p>
                            <p>
                            When I was a college student, I began learning how to create websites, and I enjoy creating online applications. To create dynamic websites, I utilize Express js, Node js, Spring boot, Laravel, Django and React. My proficiency with Photoshop enables me to build quality websites. In order to create a useful website, I put a lot of effort into my studies.
                            </p>
                            <p>
                            My hobby is watching movies, and interested in coding, photo editing, vector art, video editing, and designing websites.
                            </p>
                            <button className="resume" onClick={toggleShow}><MDBIcon fas icon="file-download" className="icon" /> Resume</button>
                            {/* <MDBBtn >Top right</MDBBtn> */}
                            <MDBModal
                                animationDirection='bottom'
                                show={topRightModal}
                                tabIndex='-1'
                                setShow={setTopRightModal}
                            >
                                <MDBModalDialog position='bottom-right' side>
                                <MDBModalContent>
                                    <MDBModalHeader className='resHeader'>
                                    <MDBModalTitle>Request Resume</MDBModalTitle>
                                    <MDBBtn
                                        color='none'
                                        className='btn-close btn-close-white'
                                        onClick={toggleShow}
                                    ></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                    {/* <div className='row'> */}
                                        <div className="default">
                                            {resumeBody()}
                                        </div>
                                    {/* </div> */}
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                    <MDBBtn className="requestBtn" color="secondary" onClick={() => requestBtn()} disabled={isDisable}>
                                        {requestText()}
                                    </MDBBtn>
                                    <MDBBtn  color='light' onClick={toggleShow}>
                                        Close
                                    </MDBBtn>
                                    </MDBModalFooter>
                                </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                    </Col>
                </Row>
                <Row className="bg-certificate mb-5">
                    <div>
                        <h6 className="projectTag" >AWARDS</h6>
                        <h2 className="projectHeader">Certificates</h2>
                    </div>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <a href="http://share.zertify.zuitt.co/certificate/ca6dce74-325e-4e4a-8c8f-7e549e4f7d17" target="_"> 
                            <img src={cert1} alt="certificate" height={350} width={450} className="cert"></img>
                        </a>
                        {/* <button className="viewBtn1">VIEW</button> */}
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <a href="http://share.zertify.zuitt.co/certificate/5b930d7d-10b3-41c1-936a-0308c510bf8f" target="_"> 
                            <img src={cert2} alt="certificate" height={330} width={450} className="cert"></img>
                        </a>
                    </Col>
                </Row>
                <Row>
                    {/* <div>
                        <h6 className="projectTag" >BACKGROUND</h6>
                        <h2 className="projectHeader">Educational</h2>
                    </div>
                    <Col>
                    
                    </Col> */}
                    <h6 className="text-center">Do you want to ask more? <a href="/contact" className="contactMe">contact me!</a></h6>
                </Row>
            </Container>
        </>
    );
}