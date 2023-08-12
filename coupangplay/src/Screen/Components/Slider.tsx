import { useEffect, useState } from "react";
import { IResult, LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import {
    Container,
    Frame,
    FrameVariants,
    Frames,
    Header,
    LeftArrow,
    RightArrow,
} from "../Styled/SliderStyled";
import { AnimatePresence } from "framer-motion";
import { createImagePath } from "../../API";
import { SlideVariants } from "../../ProjectCommon";
import InfoBar from "./InfoBar";
import { useHistory, useLocation } from "react-router-dom";

function Slider({ title, results }: { title: string; results: IResult[] }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);

    const [direction, setDirection] = useState<number>(1);
    const [moving, setMoving] = useState<boolean>(false);

    const History = useHistory();
    const Location = useLocation();

    function onRightArrowClick() {
        if (moving) return;
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
        setDirection(1);
    }

    function onLeftArrowClick() {
        if (moving) return;
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
        setDirection(-1);
    }

    function handleExitAnimation() {
        setMoving(false);
    }

    useEffect(() => {
        console.log(Location);
    }, [Location]);

    return (
        <Container>
            <LeftArrow
                onClick={onLeftArrowClick}
                src={LEFT_ARROW_URL}
            ></LeftArrow>

            <Header>{title}</Header>

            <AnimatePresence
                initial={false}
                custom={direction}
                onExitComplete={handleExitAnimation}
            >
                <Frames
                    key={startIndex}
                    variants={SlideVariants}
                    initial="start"
                    animate="end"
                    exit="exit"
                    custom={direction}
                    transition={{
                        type: "tween",
                        duration: 0.7,
                    }}
                >
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
                                variants={FrameVariants}
                                whileHover="hover"
                                transition={{ type: "tween" }}
                                onClick={() => {
                                    History.push(
                                        `/movies/details/${result.id}`
                                    );
                                }}
                            >
                                <InfoBar movieId={result.id}></InfoBar>
                            </Frame>
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
