import { useQuery } from "react-query";
import { IResult } from "../../GlobalFeatures";
import {
    Container,
    Description,
    Title,
    Star,
    ButtonContainer,
    LeftButton,
    RightButton,
    PlayButton,
    NormalButton,
} from "../Styled/TinyInfoBarStyled";
import { getMovieDetail } from "../../API";

export function InfoBar({ data }: { data: IResult }) {
    const detail = useQuery<any>(["detail_tinyInfo", data.title], () =>
        getMovieDetail(data.id)
    );
    console.log(data);
    const title = data.title ? data.title : "Funny Video";
    const score = data.vote_average ? data.vote_average : "1.0";
    const release = data.release_date ? data.release_date : "1234-56-78";
    let genre = "";
    if (!detail.isLoading && detail.data) {
        genre = detail.data.genres[0].name
            ? detail.data.genres[0].name
            : "코미디";
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Description>
                <Star>★</Star>
                &nbsp;{score} ◦ {genre} ◦ {release.split("-")[0]}
            </Description>
            <ButtonContainer>
                <LeftButton>
                    <PlayButton>&nbsp;►</PlayButton>
                    <NormalButton>+</NormalButton>
                </LeftButton>
                <RightButton>
                    <NormalButton>i</NormalButton>
                </RightButton>
            </ButtonContainer>
        </Container>
    );
}

export default InfoBar;
