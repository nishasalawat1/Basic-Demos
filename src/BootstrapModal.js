import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class BootstrapModalExample extends Component {
    constructor(){
        super();
        this.state={
            show:false,
        }
    }
    handelModal(){
        this.setState({show:!this.state.show})
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.handelModal()}>Bootstap button</Button>
                <Modal show={this.state.show} onHide={()=>this.handelModal()}>
                    <Modal.Header closeButton >This is Modal Header</Modal.Header>
                    <Modal.Body>
                        This is Modal Body
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() => this.handelModal()}>Close</Button>
                    <Button onClick={() => this.handelModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BootstrapModalExample;
