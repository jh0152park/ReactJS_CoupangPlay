import { useQuery } from "react-query";
import {
    Container,
    InfoBarVariant,
    Title,
    Description,
    Star,
    ButtonContainer,
    LeftButton,
    PlayButton,
    RightButton,
    Img,
} from "../Styled/InfoBarStyled";
import { getMovieDetail } from "../../API";
import { ADD_BUTTON_URL, INFO_BUTTON_URL } from "../../GlobalFeatures";

function InfoBar({ movieId }: { movieId: number }) {
    let score = 0;
    let title = "";
    let genre = "";
    let runtime = "";
    let release = "";

    const detail = useQuery<any>(["detail_Info", movieId], () =>
        getMovieDetail(movieId)
    );

    function updateDetilInfo() {
        if (!detail.isLoading && detail.data) {
            score = detail.data.vote_average.toFixed(2);
            title = detail.data.title;
            genre = detail.data.genres[0].name;
            runtime = detail.data.runtime;
            release = detail.data.release_date.split("-")[0];
        }
    }

    updateDetilInfo();
    return (
        <>
            {detail.isLoading ? null : (
                <Container variants={InfoBarVariant}>
                    <Title>{title}</Title>
                    <Description>
                        <Star>★</Star>
                        &nbsp;{score} ◦ {genre} ◦ {release}
                    </Description>
                    <ButtonContainer>
                        <LeftButton>
                            <PlayButton>&nbsp;►</PlayButton>
                            <Img src={ADD_BUTTON_URL}></Img>
                        </LeftButton>
                        <RightButton>
                            <Img src={INFO_BUTTON_URL}></Img>
                        </RightButton>
                    </ButtonContainer>
                </Container>
            )}
        </>
    );
}

export default InfoBar;
