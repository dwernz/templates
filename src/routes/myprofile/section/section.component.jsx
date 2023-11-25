import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import ColSm3 from '../../../components/bootstrap/colSm3/colSm3.component';
import Container from "../../../components/bootstrap/container/container.component";
import Row from '../../../components/bootstrap/row/row.component';
import { ItemStats, ItemStatsName, ItemStatsValue, SectionTitle, SectionWrapper } from "./section.styles";

const Section = () => {
    return (
        <SectionWrapper>
            <Container>
                <Row>
                    <ColMd3>
                        <SectionTitle>
                            <h2>My Activity</h2>
                        </SectionTitle>
                    </ColMd3>
                    <ColMd9>
                        <Row>
                            <ColSm3>
                                <ItemStats>
                                    <ItemStatsValue>100%</ItemStatsValue>
                                    <ItemStatsName>Job Success</ItemStatsName>
                                </ItemStats>
                            </ColSm3>
                            <ColSm3>
                                <ItemStats>
                                    <ItemStatsValue>96%</ItemStatsValue>
                                    <ItemStatsName>On Budget</ItemStatsName>
                                </ItemStats>
                            </ColSm3>
                            <ColSm3>
                                <ItemStats>
                                    <ItemStatsValue>99%</ItemStatsValue>
                                    <ItemStatsName>On Time</ItemStatsName>
                                </ItemStats>
                            </ColSm3>
                            <ColSm3>
                                <ItemStats>
                                    <ItemStatsValue>89%</ItemStatsValue>
                                    <ItemStatsName>Repeat Hire Rate</ItemStatsName>
                                </ItemStats>
                            </ColSm3>
                        </Row>
                    </ColMd9>
                </Row>
            </Container>
        </SectionWrapper>
    )
}

export default Section;