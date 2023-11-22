import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, ReturnToHomeContainer } from './return-to-home.styles';

import BasicDropdown from '../../dropdowns/basic-dropdown/basic-dropdown.component';

const ReturnToHome = () => {
    return(
        <Fragment>
            <ReturnToHomeContainer>
            <BasicDropdown 
                text="Template Menu &#9660;"
                links={[
                { text: "Template", href: "/template"},
                { text: "Modern", href: "/modern"}
            ]}/>
                <Link href="/">Return to Main Page</Link>
            </ReturnToHomeContainer>
            <Outlet />
        </Fragment>
        
    )
}

export default ReturnToHome;