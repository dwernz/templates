import ColMd3 from "../colMd3/colMd3.component";
import Container from "../container/container.component";
import Row from '../row/row.component';

const Section = () => {
    return (
        <section className='section-wrapper'>
            <Container>
                <Row>
                    <ColMd3>
                        <div className='section-title'>
                            <h2>My Activity</h2>
                        </div>
                    </ColMd3>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Section;