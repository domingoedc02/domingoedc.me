import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/Contact.scss"
import { MDBSpinner} from "mdb-react-ui-kit";
import fb from "../Images/facebook@2x.png"
import ig from "../Images/instagram@2x.png"
import twt from "../Images/twitter@2x.png"
import git from "../Images/github@2x.png"
import linkedin from "../Images/linkedin@2x.png"
import mail from "../Images/envelope@2x.png"
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export default function Contact(){
    
    document.title ="Contact"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [isDisable, setIsDisable] =useState(false)

    // useEffect(() =>{
    //     console.log(message)
        
    // }, [name, message])

    function submitContact(){
        // alert("it works")
        setIsSubmit(true)
        setIsDisable(true)
        fetch(`${process.env.REACT_APP_SERVER_URL}/mail/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })

        })
        .then(response => response.json())
        .then(result => {
            // window.location.href = "facebook.com"
            console.log(result)
        })
        .finally(() => {
            setIsDisable(false)
            setIsSubmit(false)
        })
    }

    function submitBtnText(){
        if(isSubmit === true){
            return (
                <>
                    <MDBSpinner size='sm' role='status' tag='span' />
                    <span className='visually-hidden'>Loading...</span>
                </>
            )
        } else {
            return(
                <>
                    <img src={mail} alt="mail" height={25} width={25}></img>
                                &nbsp;
                                SUBMIT
                </>
            );
        }
    }


    return (
        <>
        
            <Container>
                <Row className="contactRow">
                    <div className="head12">
                        <h6 className="projectTag" >CONTACT</h6>
                        <h2 className="projectHeader">Get in Touch</h2>
                    </div>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Form className="contactForm" >
                            <h3>CONTACT</h3>
                            <p>For business inquiries and collaborations please contact me below and leave a link to your website or portfolio. I am looking forward to hearing from you!</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="John Smith" className="inputForm" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="name@example.com" className="inputForm" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control onChange={e => setMessage(e.target.value)} as="textarea" name="message" rows={5} className="inputForm" required/>
                            </Form.Group>
                            <button type="button" onClick={() => submitContact()}  className="submitBtn-form" disabled={isDisable}>
                                {submitBtnText()}
                            </button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}> 
                        <div className="box12">

                        </div>
                        <div className="box13">

                        </div>
                        <div className="box14">

                        </div>
                        <div className="socials">
                            <h3>SOCIALS</h3>
                            <a href={`${process.env.REACT_APP_FACEBOOK}`} target="_blank" className="socialBtn text-center" >
                                <img src={fb} alt="fb" height={25} width={25}></img>
                                &nbsp;&nbsp;
                                FACEBOOK
                            </a>
                            <a href={`${process.env.REACT_APP_INSTAGRAM}`} target="_blank" className="socialBtn text-center">
                                <img src={ig} alt="fb" height={25} width={25}></img>
                                &nbsp;&nbsp;
                                INSTAGRAM
                            </a>
                            <a href={`${process.env.REACT_APP_TWITTER}`} target="_blank" className="socialBtn text-center">
                                <img src={twt} alt="fb" height={25} width={25}></img>
                                &nbsp;&nbsp;
                                TWITTER
                            </a>
                            <a href={`${process.env.REACT_APP_GITHUB}`} target="_blank" className="socialBtn text-center">
                                <img src={git} alt="fb" height={25} width={25}></img>
                                &nbsp;&nbsp;
                                GITHUB
                            </a>
                            <a href={`${process.env.REACT_APP_LINKEDIN}`} target="_blank" className="socialBtn text-center">
                                <img src={linkedin} alt="fb" height={25} width={25}></img>
                                &nbsp;&nbsp;
                                LINKEDIN
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}