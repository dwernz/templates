import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd6 from "../../../components/bootstrap/colMd6/colMd6.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { ExpertiseItem } from "./expertise.styles";

const Expertise = ({data}) => {
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>My Specialties</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        {
                            data.map((itemInfo) => (
                                <ColMd6>
                                    <ExpertiseItem>
                                        <h3>{itemInfo.skill}</h3>
                                        <p>{itemInfo.text}</p>
                                    </ExpertiseItem>
                                </ColMd6>
                            ))
                        }
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Expertise;