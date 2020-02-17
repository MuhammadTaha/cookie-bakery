import React, { Component } from 'react';
import { Label} from 'reactstrap';


class MailBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            isDropped: false
        }
        this.dropBox = this.dropBox.bind(this);
    }

    dropBox(){
        this.setState({isDropped:true});
        console.log(this);
    }

    render() { 
        return ( 
            <div className={this.state.isDropped ===true? "mailbox mailboxDrop": "mailbox"} onClick={this.dropBox}>
                <div className="mailboxHole"></div>
                <Label className="mailboxLabel">MailBox</Label>
            </div>
         );
    }
}
 
export default MailBox;