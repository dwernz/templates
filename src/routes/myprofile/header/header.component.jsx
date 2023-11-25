import profile from '../assets/images/profile-pic.jpg';
import SocialIcon from '../social-icon/social-icon.component';
import { HeaderContainer, ImgResponsive, Language, Name, NameSpan, NameWrapper, PersonalDetails, ProfileImg } from './header.styles';
import ColMd3 from '../../../components/bootstrap/colMd3/colMd3.component';
import ColMd6 from '../../../components/bootstrap/colMd6/colMd6.component';
import ColMd9 from '../../../components/bootstrap/colMd9/colMd9.component';
import Container from '../../../components/bootstrap/container/container.component';
import Row from '../../../components/bootstrap/row/row.component';

const Header = ({ name, title, birthday, nationality, languages, text }) => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <ColMd3>
                        <ProfileImg>
                            <ImgResponsive src={profile} alt="" />
                        </ProfileImg>
                    </ColMd3>
                    <ColMd9>
                        <NameWrapper>
                            <Name>{name}</Name>
                            <NameSpan>{title}</NameSpan>
                        </NameWrapper>
                        <p>
                            {text}
                        </p>
                        <Row>
                            <ColMd3>
                                <PersonalDetails>
                                    <strong>{birthday}</strong>
                                    <small>BIRTH</small>
                                </PersonalDetails>
                            </ColMd3>
                            <ColMd3>
                                <PersonalDetails>
                                    <strong>{nationality}</strong>
                                    <small>NATIONALITY</small>
                                </PersonalDetails>
                            </ColMd3>
                            <ColMd6>
                                <PersonalDetails>
                                    {languages.slice(0, -1).map((language, index) => (
                                        <Language key={index}>
                                            <strong>{language.language}</strong> <span>({language.proficiency})</span>
                                            {index !== languages.length - 1 && ', '} &nbsp;
                                        </Language>
                                    ))}
                                    {languages[languages.length - 1] && (
                                        <Language key={languages[languages.length - 1].language} style={{ display: 'inline-block' }}>
                                            <strong>{languages[languages.length - 1].language}</strong> <span>({languages[languages.length - 1].proficiency})</span>
                                        </Language>
                                    )}
                                </PersonalDetails>
                            </ColMd6>
                        </Row>
                        <SocialIcon />
                    </ColMd9>
                </Row>
            </Container>
        </HeaderContainer>
    )
}

export default Header;