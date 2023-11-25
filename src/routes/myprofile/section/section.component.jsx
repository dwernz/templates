import { SectionWrapper } from "./section.styles";

const Section = ({children}) => {
    return (
        <SectionWrapper>
            {children}
        </SectionWrapper>
    )
}

export default Section;