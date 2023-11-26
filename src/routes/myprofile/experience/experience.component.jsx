import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd6 from "../../../components/bootstrap/colMd6/colMd6.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { ContentItem } from './experience.styles';

const Experience = ({ experienceData }) => {
    const length = experienceData.length;
    const currentRow = 1;
    let row = [];
    let rowArray = [];

    for (let i = currentRow; i <= length; i += 2) {
        for (let j = 0; j <= 1; j++) {
            row.push(experienceData[i + j - 1]);
        }
        
        rowArray.push(row);
        row = [];
    }

    console.log(rowArray);


    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Experience</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>

                    {
                        rowArray.map((row) => (
                            <Row>
                                <ColMd6>
                                    <ContentItem>
                                        <small>{row[0].dates}</small>
                                        <h3>{row[0].title}</h3>
                                        <h4>{row[0].company}</h4>
                                        <p>{row[0].location}</p>
                                    </ContentItem>
                                </ColMd6>
                                {
                                    row[1] ?
                                    <ColMd6>
                                        <ContentItem>
                                            <small>{row[1].dates}</small>
                                            <h3>{row[1].title}</h3>
                                            <h4>{row[1].company}</h4>
                                            <p>{row[1].location}</p>
                                        </ContentItem>
                                    </ColMd6>
                                    :
                                    ''
                                }
                            </Row>
                        ))
                    }

                
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Experience;