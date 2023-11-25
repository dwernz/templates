import profile from '../images/img-profile.jpg';
import { HeaderContainer, Language, Name, NameSpan, NameWrapper, PersonalDetails, ProfileImg, SocialIcon } from './header.styles';

const Header = ({ name, title, birthday, nationality, languages }) => {
    return (
        <HeaderContainer>
            <div className="container">
                <div className="row">
                    <div className='col-md-3'>
                        <ProfileImg>
                            <img src={profile}  className="img-responsive" alt="" />
                        </ProfileImg>
                    </div>
                    <div className='col-md-9'>
                        <NameWrapper>
                            <Name className='name'>{name}</Name>
                            <NameSpan>{title}</NameSpan>
                        </NameWrapper>
                        <p>
                            Credibly embrace visionary internal or "organic" sources and business benefits. Collaboratively integrate efficient portals rather than customized customer service. Assertively deliver frictionless services via leveraged interfaces. Conveniently evisculate accurate sources and process-centric expertise.Energistically fabricate customized imperatives through cooperative catalysts for change.
                        </p>
                        <div className='row'>
                            <div className='col-md-3'>
                                <PersonalDetails>
                                    <strong>{birthday}</strong>
                                    <small>BIRTH</small>
                                </PersonalDetails>
                            </div>
                            <div className='col-md-3'>
                                <PersonalDetails>
                                    <strong>{nationality}</strong>
                                    <small>NATIONALITY</small>
                                </PersonalDetails>
                            </div>
                            <div className='col-md-6'>
                                <PersonalDetails>
                                    {languages.slice(0, -1).map((language, index) => (
                                        <Language>
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
                            </div>
                        </div>

                        <SocialIcon>
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
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header;