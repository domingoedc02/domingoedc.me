// import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import card from "../Images/rectangle-7@2x.png"
import "../css/Projects.scss"
import { MDBIcon } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import hein from "../Images/hein.jpg"

export default function Projects(){

    const [isHeartBtn, setIsHeartBtn] = useState(false);
    const [likesCount, setLikesCount] = useState(18);
    const [projects, setProjects] = useState([{"id": "mochimoto", "count": 0, "isLiked": false}, {"id": "mochimoto-design", "count": 0, "isLiked": false}])

    // function heartCount(projId){
    //     console.log(projects)
    //     projects.map(data => {
    //         if(data.id === projId){
    //             if(data.isLiked === false){
    //                 data.count += 1
    //                 data.isLiked = true
    //             } else {
    //                 data.count -= 1
    //                 data.isLiked = false
    //             }
    //         }
    //     })
    // }

    const projectCard = () =>{
        
        
        // console.log(projectData)
    }

    useEffect(() => {
        // projects.map(data => {
        //     fetch(`${process.env.REACT_APP_SERVER_URL}/project/likes/${data.id}`, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(result => {
        //         projects.forEach((d) => {
        //             if(d.id === data.id){
        //                 d.count=result
        //             }
        //         })
        //         // console.log(projects)
        //     })
        // })
    }, [projects])

    // function heartBtn1(projId){
    //     const index = projects.findIndex(obj=>{
    //         return obj.id === projId;
    //     })
    //     console.log(index)
    //         if(projects[index].isLiked === false){
    //             return (
    //                 <>
    //                     <button className="heartBtn"  onClick={() => heartCount(projId)}><MDBIcon far icon="heart" size="1x"/><strong className="heartCount">{projects[index].count}</strong> likes</button>
    //                 </>
    //             );
    //         } else {
    //             return (
    //                 <>
    //                     <button className="heartBtn"  onClick={() => heartCount(projId)}><MDBIcon fas icon="heart" size="1x"/><strong className="heartCount">{projects[index].count}</strong> likes</button>
    //                 </>
    //             );
    //         }
        
        
    // }
    // function heartBtn(){
    //     if(projects[projId].isLiked === false){
    //         return (
    //             <>
    //                 <button className="heartBtn"  onClick={() => heartCount(projId)}><MDBIcon far icon="heart" size="1x"/><strong className="heartCount">{projects[projId].count}</strong> likes</button>
    //             </>
    //         );
    //     } else {
    //         return (
    //             <>
    //                 <button className="heartBtn"  onClick={() => heartCount(projId)}><MDBIcon fas icon="heart" size="1x"/><strong className="heartCount">{projects[projId].count}</strong> likes</button>
    //             </>
    //         );
    //     }
        
    // }

    

    return(
        <>
            <Container id="projects" className="projectCont">
                <Row className="rowCard">
                    <div>
                        <h6 className="projectTag" >WEB PROJECTS</h6>
                        <h2 className="projectHeader">Latest Websites</h2>
                    </div>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12} >
                        {/* {projectCard()} */}
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2022 ー 2023</h5>
                                <h3 className="title">E-Commerese: Online shop for luxury brands</h3>
                                <p className="description">Luxury e-commerse platform. Basic e-commerse design and not fully functional like payment, transactions etc.</p>
                                <a href="https://hein-fronend-9qwl1b8pu-domingoedc02.vercel.app/" className="viewProject">View</a>
                                
                                {/* <button className="heartBtn"><MDBIcon far icon="heart" size="1x"/><strong className="heartCount">18</strong> likes</button> */}
                                {/* {heartBtn1("mochimoto")} */}
                            </div>
                            
                            <img src={hein} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                                
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                </Row>
                <Row className="rowCard1">
                <div>
                        <h6 className="projectTag">WEB DESIGNS</h6>
                        <h2 className="projectHeader">Latest UI/UX Design</h2>
                    </div>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12} >
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="card">
                            <div className="headerCard">
                                <h5 className="year">2023</h5>
                                <h3 className="title">Mochimoto - Bakery Online Shop</h3>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="viewProject">View</a>
                                {/* {heartBtn()} */}
                            </div>
                            
                            <img src={card} alt="image" height={300} width={480} className="card-image"/>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}