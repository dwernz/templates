import Header from "./header/header.component";
import { GlobalStyle, MainWrapper } from "./myprofile.styles";
import { profile, myActivityData, workHistoryData, expertiseData, codingSkillsData, designToolsData, experienceData, educationData, marketplaceData, portfolioData, reviewsData } from './assets/data/profile.js';
import Section from "./section/section.component.jsx";
import MyActivity from "./my-activity/my-activity.component.jsx";
import Expertise from "./expertise/expertise.component.jsx";
import Experience from './experience/experience.component.jsx';
import Skills from "./skills/skills.component.jsx";
import Education from "./education/education.component.jsx";
import Marketplace from "./marketplace/marketplace.component.jsx";
import Portfolio from "./portfolio/portfolio.component.jsx";
import Reviews from "./reviews/reviews.component.jsx";

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
            <Section>
                <Experience experienceData={experienceData} />
            </Section>
            <Section>
                <Education data={educationData} />
            </Section>
            <Section>
                <Marketplace data={marketplaceData} />
            </Section>
            <Section>
                <Portfolio data={portfolioData} />
            </Section>
            <Section>
                <Reviews data={reviewsData} />
            </Section>
        </MainWrapper>
    )
}

export default MyProfile;