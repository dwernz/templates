import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { ColMd4ColSm6, PortfolioInfo, PortfolioItem, PortfolioThumb } from "./portfolio.styles";

const Portfolio = ({ data }) => {
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Portfolio</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        {
                            data.map((portfolio) => (
                                <ColMd4ColSm6 key={portfolio.title}>
                                    <PortfolioItem href='#'>
                                        <PortfolioThumb>
                                            <img src={require(`../assets/images/${portfolio.img}`)} alt='portfolio'/>
                                        </PortfolioThumb>
                                        <PortfolioInfo>
                                            <h3>{portfolio.title}</h3>
                                            <small>{portfolio.domain}</small>
                                        </PortfolioInfo>
                                    </PortfolioItem>
                                </ColMd4ColSm6>
                            ))
                        }                        
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Portfolio;