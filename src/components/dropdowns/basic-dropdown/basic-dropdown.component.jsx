import { useState } from 'react';

import {} from './basic-dropdown.component';
import { Dropdown, DropdownContainer, DropdownToggle } from './basic-dropdown.styles';

import BootstrapButton from '../../buttons/bootstrap-button/bootstrap-button.component';

const BasicDropdown = ({ links, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="dropdown">
            {/* <BootstrapButton text="Dropdown button" color="primary" class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></BootstrapButton>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div> */}
        </div>
    )
}

export default BasicDropdown;