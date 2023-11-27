import ColMd12 from "../../../components/bootstrap/colMd12/colMd12.component"
import Container from "../../../components/bootstrap/container/container.component"
import Row from "../../../components/bootstrap/row/row.component"
import { CopyrightSection, Copytext, FooterContainer } from "./footer.styles"

const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightSection>
                <Container>
                    <Row>
                        <ColMd12>
                            <Copytext>
                                &copy; MyProfile, All rights reserved | Design Based on <a
                            href="https://themehippo.com">themehippo</a> template with Modifications by Daniel Wernz.
                            </Copytext>
                        </ColMd12>
                    </Row>
                </Container>
            </CopyrightSection>
        </FooterContainer>
    )
}

export default Footer;