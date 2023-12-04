import Container from '../../../../components/bootstrap/container/container.component';
import { IconBar, NavbarToggle, ProbootstrapNavbar } from './navbar.styles';

const Navbar = () => {
    return (
        <ProbootstrapNavbar className='navbar navbar-default navbar-fixed-top'>
            <Container>
                <div className='navbar-header'>
                    <NavbarToggle type='button' className='collapsed' data-toggle='collapse' data-target='#navbar-collpase' aria-expanded='false' aria-controls='navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <IconBar></IconBar>
                        <IconBar></IconBar>
                        <IconBar></IconBar>
                    </NavbarToggle>
                    <a className='navbar-brand' href='resto' title='uiCookies:FineOak'>FineOak</a>
                </div>
                <div id='navbar-collapse' className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li className='active'>
                            <a href='#' data-nav-section='welcome'>Welcome</a>
                        </li>
                        <li>
                            <a href="#" data-nav-section="specialties">Specialties</a>
                        </li>
                        <li>
                            <a href="#" data-nav-section="menu">Menu</a>
                        </li>
                        <li>
                            <a href="#" data-nav-section="reservation">Reservation</a>
                        </li>
                        <li>
                            <a href="#" data-nav-section="events">Events</a>
                        </li>
                        <li>
                            <a href="#" data-nav-section="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </ProbootstrapNavbar>
    )
}

export default Navbar;