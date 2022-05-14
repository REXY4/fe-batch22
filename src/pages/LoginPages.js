import React,{useState, useEffect} from "react";
import { 
    Container, 
    Row, 
    Col,
    Image ,
    Button
} from "react-bootstrap";
import logo from "../assets/logo.png";
import CardLogin from "../components/CardLogin";

const LoginPages = () => {
    const [value, setValue] = useState("");

    const handleValue = () =>{
        setValue("");
    }

    const handleValueFalse = () =>{
        setValue("");
    }

    console.log(value)
    return(
        <>
            <Container style={{
                paddingTop : "100px",
                height : "100%",
                paddingBottom : "100px",
            }}>
                <Row>
                    <Col className={"col-6"}>
                        <div className="mb-4">
                            <Image src={logo} fluid />    
                        </div>
                        <div>
                            <h1 style={{
                                fontFamily: 'AvenirNext',
                                fontStyle: "normal",
                                fontWeight: "800",
                                fontSize: "56px",
                                lineHeight: "76px",
                                color: "#FFFFFF",
                                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",  
                            }}>WIll you merrie me? </h1>
                            <p style={{
                                fontFamily: 'AvenirNext',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "18px",
                                lineHeight: "25px",
                                color: "#6A6A6A",
                            }}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                        </div>
                    </Col>
                    <Col className="col-6 d-flex justify-content-center">
                        <CardLogin isi="Login"/>
                    </Col>
                    <Col className="mt-5">
                            <div>
                                <Button 
                                onClick={()=>handleValue()}
                                variant="danger"
                                 style={{ 
                                    background: "#F74D4D",
                                    borderrRadius: "5px",
                                    width: "135px",
                                    height: "40px",
                                    marginRight : "20px",
                                    fontFamily: 'AvenirNext',
                                    fontStyle: "normal",
                                    fontWeight: "800",
                                 }}
                                 >{value}
                                 </Button>
                                 <a
                                 onClick={()=>handleValueFalse()} 
                                 variant="primary" style={{
                                    background: "none",
                                    border : "none",
                                    fontFamily: 'AvenirNext',
                                    fontStyle: "normal",
                                    fontWeight: "800",
                                    cursor : "pointer"
                                 }}>
                                     not
                                 </a>
                            </div>
                    </Col>
                    <Col>
                                 <h1>{value}</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPages;