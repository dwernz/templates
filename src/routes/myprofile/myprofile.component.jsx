import Header from "./header/header.component";
import { GlobalStyle, MainWrapper } from "./myprofile.styles";
import { profile } from './assets/data/profile.js';

// const languages = [
//     { language: 'English', proficiency: 'native'},
//     { language: 'Korean', proficiency: 'basic'}, 
//     { language: 'Japanese', proficiency: 'basic'},
//     { language: 'French', proficiency: 'basic'}
// ];

const MyProfile = () => {
    const {name, title, birthday, nationality, languages} = profile;
    
    return (
        <MainWrapper>
            <GlobalStyle />
            <Header 
                name={name} 
                title={title}
                birthday={birthday}
                nationality={nationality} 
                languages={languages} />
        </MainWrapper>
    )
}

export default MyProfile;