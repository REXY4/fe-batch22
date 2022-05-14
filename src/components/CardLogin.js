import { Card, Form, Button } from "react-bootstrap"
import "../styles/index.css"

const CardLogin = ({isi}) => {
    return(
        <>
            <Card style={{
                width: "416px",
                height: "366px",
                background: "#181818",
                borderRadius: "10px",
                marginTop: "80px",
            }}>
                <Card.Body className="p-4">
                    <h1 style={{
                        fontFamily: 'AvenirNext',
                        fontStyle: "normal",
                        fontWeight: "900",
                        fontSize: "36px",
                        lineHeight: "49px",
                        color: "#FFFFFF",
                    }}>{isi}</h1>
                    <div className="mt-4 mb-5">
                    <Form.Group className="mb-3" >
                        <Form.Control type="email" placeholder="Email" id="input"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" placeholder="Password" id="input"/>
                    </Form.Group>
                    </div>   
                    <Button variant="danger" 
                    style={{
                        width: "350px",
                        height: "50px",
                        background: "#F74D4D",
                        borderRadius: "5px",     
                    }}>Login</Button>  
                </Card.Body>
            </Card> 
        </>
    )
}

export default CardLogin;