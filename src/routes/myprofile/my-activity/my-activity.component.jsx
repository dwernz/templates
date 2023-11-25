import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import ColSm3 from '../../../components/bootstrap/colSm3/colSm3.component';
import Container from "../../../components/bootstrap/container/container.component";
import Row from '../../../components/bootstrap/row/row.component';

import { ItemStats, ItemStatsName, ItemStatsValue, SectionTitle } from "../section/section.styles";

const MyActivity = ({title, data}) => {
    return (
        <Container>
                <Row>
                    <ColMd3>
                        <SectionTitle>
                            <h2>{title}</h2>
                        </SectionTitle>
                    </ColMd3>
                    <ColMd9>
                        <Row>
                            {
                                data.map((itemStats) => (        
                                    <ColSm3>
                                        <ItemStats>
                                            <ItemStatsValue>{itemStats.ItemStatsValue}</ItemStatsValue>
                                            <ItemStatsName>{itemStats.ItemStatsName}</ItemStatsName>
                                        </ItemStats>
                                    </ColSm3>
                                ))
                            }
                        </Row>
                    </ColMd9>
                </Row>
            </Container>
    )
}

export default MyActivity;