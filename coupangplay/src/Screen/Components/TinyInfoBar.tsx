import { useQuery } from "react-query";
import { IResult, MouseOnTop20State } from "../../GlobalFeatures";
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
    InfobarVariants,
} from "../Styled/TinyInfoBarStyled";
import { getMovieDetail } from "../../API";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

export function InfoBar({ data }: { data: IResult }) {
    const MouseOnTopPoster = useRecoilValue(MouseOnTop20State);
    const detail = useQuery<any>(["detail_tinyInfo", data.title], () =>
        getMovieDetail(data.id)
    );
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
        <>
            {MouseOnTopPoster ? ( // <Container variants={InfobarVariants} whileHover="hover">
                <Container variants={InfobarVariants} whileHover="hover">
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
            ) : null}
        </>
    );
}

export default InfoBar;
