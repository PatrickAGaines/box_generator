import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }
    
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none'
    }

    return(
        <header style={ headerStyle }>
            <h1>Build-A-Block</h1>
            <Link style={ linkStyle } to='/'>Home</Link> | <Link style={ linkStyle } to='/about'>About</Link>
        </header>
    );
}

export default Header;