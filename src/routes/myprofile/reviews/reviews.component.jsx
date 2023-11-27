import ColMd3 from "../../../components/bootstrap/colMd3/colMd3.component";
import ColMd9 from "../../../components/bootstrap/colMd9/colMd9.component";
import Container from "../../../components/bootstrap/container/container.component";
import Row from "../../../components/bootstrap/row/row.component";
import { SectionTitle } from "../section/section.styles";
import { Media, MediaBody, MediaLeft, Rating, RatingProgress, RatingTotal, Review, ReviewText, UserName } from "./reviews.styles";

const Reviews = ({ data }) => {
    const StarRating = ((rating) => {
        
        const filledStars = rating.rating;
        const emptyStars = 5 - filledStars;

        const filledStarIcon = <i className="fa-solid fa-star"></i>;
        const emptyStarIcon = <i className="fa-regular fa-star"></i>;

        const stars = [];

        console.log(filledStars, emptyStars);

        for (let i = 1; i <= filledStars; i++) {
            stars.push(filledStarIcon);
        }

        for (let i = 1; i <= emptyStars; i++) {
            stars.push(emptyStarIcon);
        }

        console.log(stars);

        return (
            <span>
            {
                stars.map((star) => (
                    <span>{star}</span>
                ))
            }
            </span>
        );
    });
    
    return (
        <Container>
            <Row>
                <ColMd3>
                    <SectionTitle>
                        <h2>Recent Reviews</h2>
                    </SectionTitle>
                </ColMd3>
                <ColMd9>
                    <Review id='review'>
                        {
                            data.map((review) => (
                                <div className="item" key={review.username}>
                                    <Media>
                                        <MediaLeft>
                                            <img src={require(`../assets/images/${review.image}`)} alt='avatar'/>
                                        </MediaLeft>
                                        <MediaBody>
                                            <UserName>{review.username}</UserName>
                                            <Rating data-star_rating={review.dataStarRating}>
                                                <RatingTotal>
                                                    <RatingProgress className={review.ratingProgress}><StarRating className='star-rating' rating={review.dataStarRating} /></RatingProgress>
                                                </RatingTotal>
                                            </Rating>
                                            <ReviewText>
                                                {review.text}
                                            </ReviewText>
                                        </MediaBody>
                                    </Media>
                                </div>
                            ))
                        }
                    </Review>
                </ColMd9>
            </Row>
        </Container>
    )
}

export default Reviews;