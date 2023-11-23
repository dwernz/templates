import { useState, useEffect } from 'react';

import { CloseBtn, NavbarBurger, NavbarContainer, NavbarLink, NavbarMenu, NavbarMenuLink, NavbarMenuLinkContainer } from "./daniel-navbar-1.styles";

const DanielNavbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuOpen = () => {
        setIsOpen(!isOpen);
    };
    
    // Handles if the screen's width increases to over 768px, will automatically close.
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
            setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <NavbarContainer>
            <NavbarLink href='#'>Home</NavbarLink>
            <NavbarLink href='#'>About</NavbarLink>
            <NavbarLink href='#'>Services</NavbarLink>
            <NavbarLink href='#'>Contact</NavbarLink>

            <NavbarBurger onClick={toggleMenuOpen}>
                <span className="material-icons">menu</span>
            </NavbarBurger>

            {/* Small screen menu, will open when the NavbarBurger button is clicked. */}
            <NavbarMenu className={isOpen ? 'open' : ''}>
                {isOpen && (
                    <>
                        <CloseBtn onClick={toggleMenuOpen}>X</CloseBtn>
                        <NavbarMenuLinkContainer>
                            <NavbarMenuLink href="#" onClick={toggleMenuOpen}>Home</NavbarMenuLink>
                            <NavbarMenuLink href="#" onClick={toggleMenuOpen}>About</NavbarMenuLink>
                            <NavbarMenuLink href="#" onClick={toggleMenuOpen}>Services</NavbarMenuLink>
                            <NavbarMenuLink href="#" onClick={toggleMenuOpen}>Contact</NavbarMenuLink>
                        </NavbarMenuLinkContainer>
                    </>
                )}
            </NavbarMenu>
        </NavbarContainer>
    )
}

export default DanielNavbar1;