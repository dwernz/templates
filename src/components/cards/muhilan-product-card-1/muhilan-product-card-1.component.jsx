import picture from './headphones.png';
import { Card, CardBack, CardContainer, CardFront, CardInner } from './muhilan-product-card-1.styles';

const MuhilanProductCard1 = () => {
    return (
        <CardContainer>
            <Card>
                <CardInner>
                    <CardFront>
                        <img src={picture} alt='headphones' />
                    </CardFront>
                    <CardBack>
                        <img src={picture} alt='headphones' />
                        <h3>Boat 135G Ultra Sound</h3>
                        <h1>$450</h1>
                    </CardBack>
                </CardInner>
            </Card>
        </CardContainer>
    )
}

export default MuhilanProductCard1;