import { useState } from "react";
import { IData, LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    Container,
    Frame,
    Frames,
    Header,
    LeftArrow,
    RightArrow,
} from "../Styled/SliderStyled";
import { AnimatePresence } from "framer-motion";
import { createImagePath } from "../../API";

// interface IInput {
//     title: string;
//     results: IData;
// }

function Slider({ title, results }: { title: string; results: any[] }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);

    function onRightArrowClick() {
        switch (startIndex) {
            case 0:
                setStartIndex(6);
                setEndIndex(12);
                break;
            case 6:
                setStartIndex(12);
                setEndIndex(18);
                break;
            case 12:
                setStartIndex(0);
                setEndIndex(6);
                break;
            default:
                break;
        }
    }

    function onLeftArrowClick() {
        switch (startIndex) {
            case 0:
                setStartIndex(12);
                setEndIndex(18);
                break;
            case 6:
                setStartIndex(0);
                setEndIndex(6);
                break;
            case 12:
                setStartIndex(6);
                setEndIndex(12);
                break;
            default:
                break;
        }
    }

    console.log(results);

    return (
        <Container>
            <LeftArrow
                onClick={onLeftArrowClick}
                src={LEFT_ARROW_URL}
            ></LeftArrow>

            <Header>{title}</Header>

            <AnimatePresence>
                <Frames>
                    {results
                        .slice(startIndex, endIndex)
                        .map((result, index) => (
                            <Frame
                                key={index}
                                BGPhoto={createImagePath(
                                    result.backdrop_path
                                        ? result.backdrop_path
                                        : result.poster_path
                                )}
                            ></Frame>
                        ))}
                </Frames>
            </AnimatePresence>

            <RightArrow
                onClick={onRightArrowClick}
                src={RIGHT_ARROW_URL}
            ></RightArrow>
        </Container>
    );
}

export default Slider;
