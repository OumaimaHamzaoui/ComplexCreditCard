import React from 'react'
import '../Card/style.css'
import puce from './puce.jpg'
import mc from './mc.png';
import  { Container,Row, Col } from 'react-bootstrap'
const Card=(props)=>{
    return (
        <Container className="main-container">
         <Row>
            <Col md={{span: 7, offset:5}}>
                <h1>CREDIT CARD</h1>
            </Col>
        </Row>
        <Row>
            <Col md={{span:4 ,offset:1}}>
                <img src={puce} className="puce"/>
            </Col>
        </Row>
        <Row>
            <Col className="card-number" md={{span: 8, offset: 1}}>
            {props.CardNumber}
            </Col>
        </Row>
        <Row>
            <Col className="cardholder" md={{span:2,offset:1}}>
                <p>5224</p>
                <p>{props.CardHolder}</p>
            </Col>
            <Col md={{span:3, offset:3}} className="validity">
                <Row>
                    <Col className="val-label" md={{span:3, offset:4}}>MONTH/YEAR</Col>
                </Row>
                <Row>
                    <Col className="label" md={{span:3, offset:1}}>VALID THRU</Col>
                    <Col className="date-val"md={{span:3, offset:1}}>{props.VALIDTHRU}</Col>
                </Row>
            </Col>
            <Col>
            <img src={mc} className="mc"/>
            </Col>
        </Row>

        </Container>

        

    )
}
export default Card;