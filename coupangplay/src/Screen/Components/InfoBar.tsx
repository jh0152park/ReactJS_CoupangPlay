import {
    Container,
    InfoBarVariant,
    Title,
    Description,
} from "../Styled/InfoBarStyled";

function InfoBar({ movieTitle, score }: { movieTitle: string; score: number }) {
    return (
        <>
            <Container variants={InfoBarVariant}>
                <Title>{movieTitle}</Title>
                <Description>{score}</Description>
            </Container>
        </>
    );
}

export default InfoBar;
