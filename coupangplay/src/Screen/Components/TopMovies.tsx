import { LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    Container,
    Frame,
    Frames,
    Header,
    LeftArrow,
    RightArrow,
} from "../Styled/TopMoviesStyled";

function TopMovies() {
    return (
        <Container>
            <LeftArrow src={LEFT_ARROW_URL}></LeftArrow>

            <Header>이번 주 인기작 TOP 20</Header>
            <Frames>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <Frame>{num}</Frame>
                ))}
            </Frames>

            <RightArrow src={RIGHT_ARROW_URL}></RightArrow>
        </Container>
    );
}

export default TopMovies;