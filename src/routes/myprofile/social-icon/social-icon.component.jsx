import { SocialIconContainer } from "./social-icon.styles";

const SocialIcon = () => {
    return (
        <SocialIconContainer>
            <li>
                <a href='#'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="fa-brands fa-slack"></i>
                </a>
            </li>
            <li>
                <a href='#'>
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
        </SocialIconContainer>
    )
}

export default SocialIcon;