import { AnimatePresence } from "framer-motion";
import { createImagePath, getMovieDetail } from "../../API";
import {
    Wrapper,
    IData,
    DisplayBox,
    MainBannerImageVariants,
    LeftArrow,
    LEFT_ARROW_URL,
    RightArrow,
    RIGHT_ARROW_URL,
    Description,
    Title,
    Information,
    Star,
    Play,
} from "../Styled/BannerStyled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Banner({ results }: IData) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);
    const [moving, setMoving] = useState(false);
    const [direction, setDirection] = useState(1);
    const detail = useQuery("detail", () =>
        getMovieDetail(results[startIndex].id)
    );

    let genre = "";
    let runtime = "";
    const maxLength = results.length;

    function onRightArrowClick() {
        if (moving) return;

        if (endIndex === maxLength) {
            setStartIndex(0);
            setEndIndex(1);
        } else {
            setStartIndex((prev) => prev + 1);
            setEndIndex((prev) => prev + 1);
        }
        setMoving(true);
        setDirection(1);
        detail.refetch();
    }

    function onLeftArrowClick() {
        if (moving) return;

        if (startIndex === 0) {
            setStartIndex(maxLength - 1);
            setEndIndex(maxLength);
        } else {
            setStartIndex((prev) => prev - 1);
            setEndIndex((prev) => prev - 1);
        }
        setMoving(true);
        setDirection(-1);
        detail.refetch();
    }

    function animationFinished() {
        setMoving(false);
    }

    function getMoreInfo() {
        if (!detail.isLoading && detail.data) {
            genre = detail.data.genres[0].name;
            runtime = detail.data.runtime;
        }
    }

    useEffect(() => {
        detail.refetch();
        getMoreInfo();
    }, [startIndex, endIndex, direction]);

    getMoreInfo();
    return (
        <>
            {detail.isLoading ? null : (
                <Wrapper>
                    <AnimatePresence
                        initial={false}
                        onExitComplete={animationFinished}
                        custom={direction}
                    >
                        <LeftArrow
                            onClick={onLeftArrowClick}
                            src={LEFT_ARROW_URL}
                        ></LeftArrow>
                        {results.slice(startIndex, endIndex).map((result) => (
                            <DisplayBox
                                key={result.id}
                                variants={MainBannerImageVariants}
                                initial="start"
                                animate="end"
                                exit="exit"
                                custom={direction}
                                BGPhoto={createImagePath(
                                    result.backdrop_path
                                        ? result.backdrop_path
                                        : result.poster_path
                                )}
                                transition={{
                                    type: "tween",
                                    duration: 1,
                                }}
                            >
                                <Description>
                                    <Title>
                                        {result.title
                                            ? result.title
                                            : result.name}
                                    </Title>
                                    <Information>
                                        <Star>★</Star>
                                        {result.vote_average} ◦ {genre} ◦{" "}
                                        {runtime}분
                                    </Information>
                                    <Play>► 재생하기</Play>
                                </Description>
                            </DisplayBox>
                        ))}
                        <RightArrow
                            onClick={onRightArrowClick}
                            src={RIGHT_ARROW_URL}
                        ></RightArrow>
                    </AnimatePresence>
                </Wrapper>
            )}
        </>
    );
}

export default Banner;
