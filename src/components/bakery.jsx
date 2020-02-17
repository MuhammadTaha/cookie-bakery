import React, { Component } from 'react';
import { Row, Col, Label} from 'reactstrap';
import  MailBox from "./mailbox";


class Bakery extends Component {
    render() { 
        return ( 
        <div className="building">
            <Row>
                <Col md={{ size: 'auto', offset: 9}}>
                <div className="sun" ></div>
                </Col>
            </Row>
            <Row>
                <div className="roof"></div>
                <div className="displayName">
                    <Label>Cookie Bakery</Label>
                </div>
                <Row className="wall">
                    <Col>
                        <div className="window"></div>
                    </Col>
                    <Col>
                        <div className="door">
                            <div className="doorHandle"></div>
                        </div>
                    </Col>
                    <Col>
                        <Row><div className="window"></div></Row>
                        <Row> 
                            <MailBox></MailBox>
                        </Row>

                    </Col>
                    {/* <div className="window" id="window1"></div>
                    <div className="window" id="window2"></div> */}
                </Row>
            </Row>
        </div> );
    }
}
 
export default Bakery;