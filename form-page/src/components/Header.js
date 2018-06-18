import React from 'react';

class Header extends React.Component{
    shouldComponentUpdate(nextProps) {
        return (false);
    }
    render(){
        console.log("headerrrr")

        return (
            <nav>
            <div className='nav-wrapper blue-grey darken-1'>
                <h1>Blog Posts</h1>
            </div>
            </nav>
        )
    }
}

export default Header;