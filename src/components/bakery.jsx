import React, { Component } from 'react';
import { Row, Col, Label} from 'reactstrap';
import  MailBox from "./mailbox";


class Bakery extends Component {

    constructor(props){
        super(props);
        this.changeMode = this.changeMode.bind(this);
        this.state = {
            isNightMode: false
        }
    }

    changeMode(){

        this.setState(prevState=>({
            isNightMode: !prevState.isNightMode
        }));
    }

    render() { 
        this.state.isNightMode ? document.body.classList.add('darkMode') :  document.body.classList.remove('darkMode');

        return ( 
        <div className="building">
            <Row>
                <Col md={{ size: 'auto', offset: 9}}>
                    <div className={this.state.isNightMode? "sun dark": "sun"} onClick={this.changeMode}></div>
                </Col>
            </Row>
            <Row>
                <div className="roof"></div>
                <div className="displayName">
                    <Label>Cookie Bakery</Label>
                </div>
                <Row className="wall">
                    <Col>
                        <div  className={this.state.isNightMode?"window noHover":"window"}></div>
                    </Col>
                    <Col>
                        <div className="door">
                            <div className="doorHandle"></div>
                        </div>
                    </Col>
                    <Col>
                        <Row><div className={this.state.isNightMode?"window noHover":"window"}></div></Row>
                        <Row> 
                            <MailBox></MailBox>
                        </Row>

                    </Col>
                </Row>
            </Row>
        </div> );
    }
}
 
export default Bakery;