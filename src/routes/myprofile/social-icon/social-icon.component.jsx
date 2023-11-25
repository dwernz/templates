import { SocialIconContainer } from "./social-icon.styles";

const SocialIcon = () => {
    return (
        <SocialIconContainer>
            <li>
                <a href='https://www.facebook.com'>
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href='https://www.twitter.com'>
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href='https://www.slack.com'>
                    <i className="fa-brands fa-slack"></i>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com'>
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
        </SocialIconContainer>
    )
}

export default SocialIcon;