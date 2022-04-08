import React from "react";
import { Link } from 'react-router-dom';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import './header.styles.scss';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            isClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const { clicked } = this.state;
        return (
            <header className='navbar'>
                <Link to='/' className='my-logo-container'>
                    <p className='my-logo'>PORTFOLIO</p>
                </Link>

                <div className="header-bar" onClick={this.handleClick}>
                    {
                        clicked ?
                            <AiOutlineClose className="close" />
                            : <BiMenuAltRight className="bar" />

                    }
                </div>

                <div className={this.state.clicked ? 'active' : 'options'}>
                    <Link onClick={this.handleClick} className='option' to='/'>
                        Home
                    </Link>
                    <Link onClick={this.handleClick} className='option ' to='/about'>
                        About
                    </Link>
                    <Link onClick={this.handleClick} className='option' to='/contact'>
                        Contact
                    </Link>
                    <Link onClick={this.handleClick} className='option' to='/projects'>
                        Projects
                    </Link>
                </div>
            </header >
        )
    }
}

export default Header;