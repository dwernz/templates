import Header from "./header/header.component";
import { GlobalStyle, MainWrapper } from "./myprofile.styles";
import { profile, myActivityData, workHistoryData, expertiseData, codingSkillsData, designToolsData } from './assets/data/profile.js';
import Section from "./section/section.component.jsx";
import MyActivity from "./my-activity/my-activity.component.jsx";
import Expertise from "./expertise/expertise.component.jsx";
import Skills from "./skills/skills.component.jsx";

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
            <Section>
                <MyActivity title='My Activity' data={myActivityData} />
            </Section>
            <Section>
                <MyActivity title='Work History' data={workHistoryData} />
            </Section>
            <Section>
                <Expertise data={expertiseData} />
            </Section>
            <Section>
                <Skills codingSkillsData={codingSkillsData} designToolsData={designToolsData} />
            </Section>
        </MainWrapper>
    )
}

export default MyProfile;