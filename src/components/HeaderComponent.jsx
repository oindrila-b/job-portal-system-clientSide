import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        
        };
      }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md mavbar-dark bg-white header'>
                        <div className='navbar-brand text-black'>
                            <h1>
                                <b>Job Portal App</b>
                                </h1>
                            </div>
                    </nav>
                    
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;