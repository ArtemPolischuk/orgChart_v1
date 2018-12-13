import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(
            <div className='background'>
                <div className='modal'>
                    {children}
                </div>
            </div>,
            this.root
        )
    }
}

export default Modal;