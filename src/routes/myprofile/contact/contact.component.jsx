import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { AddressStrong } from "./contact.styles";

const Contact = ({data}) => {
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Contact</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Row>
                        <ColMd3>
                            <address>
                                <AddressStrong>Address</AddressStrong>< br />
                                {data.street}<br />
                                {data.city}, {data.state} {data.zip}
                            </address>
                        </ColMd3>
                        {
                            data.phone ?
                            <ColMd3>
                                <address>
                                    <AddressStrong>Phone Number</AddressStrong><br />
                                    {data.phone}
                                </address>
                            </ColMd3>
                            :
                            ""
                        }
                        <ColMd3>
                            <address>
                                <AddressStrong>Mobile Number</AddressStrong><br />
                                {data.mobile}
                            </address>
                        </ColMd3>
                        <ColMd3>
                            <address>
                                <AddressStrong>Email</AddressStrong><br />
                                {data.email}
                            </address>
                        </ColMd3>
                    </Row>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Contact;