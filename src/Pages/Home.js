import { Container, Row } from "react-bootstrap";
import "../css/Home.scss"
import Projects from "../Components/Projects";
import { MDBIcon } from "mdb-react-ui-kit";


export default function Home(){

    document.title = "Home"

    return(
        <>

            <div className="div1">
                <div>
                    <MDBIcon fab icon="react" size="3x" className="react"/>
                    <MDBIcon fab icon="docker" size="3x" className="docker"/>
                    <MDBIcon fab icon="python" size="3x" className="python"/>
                    <MDBIcon fab icon="node" size="3x" className="node"/>
                    <MDBIcon fab icon="vuejs" size="3x" className="vuejs"/>
                    <MDBIcon fab icon="php" size="3x" className="php"/>
                    <MDBIcon fab icon="html5" size="3x" className="html5"/>
                    <MDBIcon fas icon="database" size="3x" className="database"/>
                    <MDBIcon fab icon="angular" size="3x" className="angular"/>
                    {/* <MDBIcon fab icon="sass" size="3x" className="sass"/> */}
                    <MDBIcon fab icon="wordpress" size="3x" className="wordpress"/>
                    <MDBIcon fab icon="bootstrap" size="3x" className="bootstrap"/>
                    
                    
                </div>
                <h6 className="text-center name">EDSON JOHN DOMINGO</h6>
                <h1 className="text-center header"><span className="odd">W</span><span className="even">e</span><span className="odd">b</span><span className="even">s</span><span className="odd">i</span><span className="even">t</span><span className="odd">e</span> <span className="even">d</span><span className="odd">e</span><span className="even">v</span><span className="odd">e</span><span className="even">l</span><span className="odd">o</span><span className="even">p</span><span className="odd">e</span><span className="even">r</span> <span className="odd">a</span><span className="even">n</span><span className="odd">d</span> <span className="even">U</span><span className="odd">I</span> <span className="even">/</span> <span className="odd">U</span><span className="even">X</span> <span className="odd">d</span><span className="even">e</span><span className="odd">s</span><span className="even">i</span><span className="odd">g</span><span className="even">n</span><span className="odd">e</span><span className="even">r</span></h1>
                <p className="par">
                    As a web developer and designer for the past three years, I've developed web projects using several back-end frameworks such as Springboot, Node.js, Laravel, and Django.
                </p>
                <h6 className="text-center mt-5"><a href="#projects" className="">View projects</a> or <a href="#" className="">Read more</a></h6>
                
            </div>
            {/* <Container className="container1">
                <Row> */}
                    
                {/* </Row>
            </Container> */}
            <Projects/>
            <div className="get-in-touch">
                <h1 className="text-center text1">NEED A DEVELOPER?</h1>
                <h1 className=" text-center text2"><a href="/contact" >Let's work together →</a></h1>
            </div>
        </>
    );
}