import Header from "./header/header.component";
import { GlobalStyle, MainWrapper } from "./myprofile.styles";
import { profile } from './assets/data/profile.js';
import Section from "./section/section.component.jsx";

const MyProfile = () => {
    const {name, title, birthday, nationality, languages, text } = profile;
    
    return (
        <MainWrapper>
            <GlobalStyle />
            <Header 
                name={name} 
                title={title}
                text={text}
                birthday={birthday}
                nationality={nationality} 
                languages={languages} />
            <Section />
        </MainWrapper>
    )
}

export default MyProfile;