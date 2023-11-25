import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd6 from "../../../components/bootstrap/colMd6/colMd6.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { ProgressWrapper } from "./skills.styles";
import ProgressItemContainer from "../progress-item-container/progress-item-container.component";

const Skills = ({ codingSkillsData, designToolsData }) => {
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Skills</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        <ColMd6>
                            <ProgressWrapper>
                                <h3>CODING SKILLS</h3>
                                {
                                    codingSkillsData.map((skill, index) => (
                                        <ProgressItemContainer key={index} skill={skill.skill} progress={skill.progress}/>
                                    ))
                                }
                            </ProgressWrapper>
                        </ColMd6>
                        <ColMd6>
                            <ProgressWrapper>
                                <h3>DESIGN TOOLS</h3>
                                {
                                    designToolsData.map((skill, index) => (
                                        <ProgressItemContainer key={index} skill={skill.skill} progress={skill.progress}/>
                                    ))
                                }
                            </ProgressWrapper>
                        </ColMd6>
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Skills;