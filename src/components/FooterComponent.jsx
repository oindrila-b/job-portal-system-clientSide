import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          jobs:[]
        };
      }
    render() {
        return (
            <div>
                <footer className='footer'>
                <span className='text-white'> All Rights Reserved 2023 @OindrilaBanerjee</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;