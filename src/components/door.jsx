import React, { Component } from 'react';

class Door extends Component {
    constructor(props) {
        super(props);
        this.placeOrder = this.placeOrder.bind(this);

    }

    async placeOrder(){

        if(this.props.nightMode){
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
        return ( 

            <div className="door" onClick={this.placeOrder}>
                <div className="doorHandle"></div>
            </div>

         );
    }
}
 
export default Door;