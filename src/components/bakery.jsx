import React, { Component } from 'react';
import { Row, Col, Label} from 'reactstrap';
import  MailBox from "./mailbox";


class Bakery extends Component {

    constructor(props){
        super(props);
        this.changeMode = this.changeMode.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.state = {
            isNightMode: false
        }
    }

    changeMode(){

        this.setState(prevState=>({
            isNightMode: !prevState.isNightMode
        }));
    }

    async placeOrder(){

        if(this.state.isNightMode){
            alert("Sorry, order is not possible.");
            return;
        }

        let url = "http://127.0.0.1:8000/api/order";


        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('GET', 'POST', 'OPTIONS');

        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors',
            headers: headers,
            body: JSON.stringify({"order_time":  Date.now()})  
        });
        let res = await response.json();
        if(res.message && res.message!==''){
            alert('Order successfully placed.');
        } else {
            alert('Sorry something went wrong.');
        }

        return res;
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
                        <div className="door" onClick={this.placeOrder}>
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