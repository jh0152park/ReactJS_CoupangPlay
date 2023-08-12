import { IData, LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    Container,
    Frame,
    Frames,
    Header,
    LeftArrow,
    RightArrow,
} from "../Styled/SliderStyled";

function Slider({ title, results }: { title: string; results: IData }) {
    function onLeftArrowClick() {}

    function onRightArrowClick() {}

    return (
        <Container>
            <LeftArrow
                onClick={onLeftArrowClick}
                src={LEFT_ARROW_URL}
            ></LeftArrow>

            <Header>{title}</Header>
            <Frames>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Frame key={i}></Frame>
                ))}
            </Frames>

            <RightArrow
                onClick={onRightArrowClick}
                src={RIGHT_ARROW_URL}
            ></RightArrow>
        </Container>
    );
}

export default Slider;
