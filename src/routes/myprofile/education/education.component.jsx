import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import ColMd12 from "../../../components/bootstrap/colMd12/colMd12.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { ContentItem } from "../experience/experience.styles";

const Education = ({data}) => {
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Education</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        <ColMd12>
                            {
                                data.map((education) => (
                                    <ContentItem key={education.company}>
                                        <small>{education.dates}</small>
                                        <h3>{education.title}</h3>
                                        <h4>{education.company}</h4>
                                        <p>{education.location}</p>
                                    </ContentItem>
                                ))
                            }
                        </ColMd12>
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Education;