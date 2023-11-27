import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd6 from "../../../components/bootstrap/colMd6/colMd6.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { Media, MediaBody, MediaHeading, MediaLeft, MediaObject, ProfileItem } from "./marketplace.styles";


const Marketplace = ({data}) => {    
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Marketplace Profile</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        {
                            data.map((data) => (
                                <ColMd6 key={data.title}>
                                    <ProfileItem>
                                        <Media>
                                            <MediaLeft>
                                                <a href={data.link}>
                                                    <MediaObject src={require(`../assets/images/${data.img}`)} alt='...' />
                                                </a>
                                            </MediaLeft>
                                            <MediaBody>
                                                <MediaHeading>
                                                    <a href={data.link}>{data.title}</a>
                                                    {data.text}
                                                </MediaHeading>
                                            </MediaBody>
                                        </Media>
                                    </ProfileItem>
                                </ColMd6>
                            ))
                        }
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Marketplace;