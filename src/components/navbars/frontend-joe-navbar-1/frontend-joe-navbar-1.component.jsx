import React, { useState } from 'react';
import { GlobalStyle, Navbar, NavbarBurger, NavbarMenu, NavbarOverlay, NavbarTitle } from './frontend-joe-navbar-1.styles';

const FrontendJoeNavbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuOpen = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('open');
    }

    // Current does not open when menu is clicked.
    // Need to find a burger menu icon instead of the text menu.

    return (
        <>
            <GlobalStyle />
            <Navbar>
                <NavbarOverlay onClick={toggleMenuOpen} />

                <NavbarBurger onClick={toggleMenuOpen} >
                    <span className='material-icons'>menu</span>
                </NavbarBurger>

                <NavbarTitle>Awards</NavbarTitle>

                <NavbarMenu>
                    <button>Skills</button>
                    <button className={isOpen ? 'active' : ''}>Awards</button>
                    <button>Projects</button>
                </NavbarMenu>
                
            </Navbar>
        </>
        
    )
}

export default FrontendJoeNavbar1;