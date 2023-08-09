import { useState } from "react";
import { LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../\bGlobalFeatures";
import {
    Category,
    Container,
    GenresCategoriesVariants,
    LeftArrow,
    RightArrow,
} from "../Styled/CategoryBarStyled";
import { CATEGORIES } from "../Types/CategoryBarTypes";
import { AnimatePresence } from "framer-motion";

//0 - 10 / 10 - 23

function CategoryBar() {
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(10);
    const [direction, setDirection] = useState<number>(1);
    const [moving, setMoving] = useState<boolean>(false);

    function updateIndex() {
        if (startIndex === 0) {
            setStartIndex(10);
            setEndIndex(23);
        } else {
            setStartIndex(0);
            setEndIndex(10);
        }
    }

    function onLeftArrowClick() {
        // if (moving) return;

        updateIndex();
        setDirection(-1);
        setMoving(true);
        console.log("left arrow clicked");
    }

    function onRightArrowClick() {
        // if (moving) return;

        updateIndex();
        setDirection(1);
        setMoving(true);

        console.log("right arrow clicked");
    }

    function animationFinished() {
        setMoving(false);
        console.log("animation finished");
    }

    return (
        <AnimatePresence
            // initial={false}
            onExitComplete={animationFinished}
            // custom={direction}
        >
            <Container>
                <LeftArrow
                    onClick={onLeftArrowClick}
                    src={LEFT_ARROW_URL}
                ></LeftArrow>
                {CATEGORIES.slice(startIndex, endIndex).map((category) => (
                    <Category
                        length={category.length * 15}
                        // variants={GenresCategoriesVariants}
                        // initial="start"
                        // animate="end"
                        // exit="exit"
                        // custom={direction}
                        // transition={{
                        //     type: "tween",
                        //     duration: 1.5,
                        // }}
                    >
                        {category}
                    </Category>
                ))}
                <RightArrow
                    onClick={onRightArrowClick}
                    src={RIGHT_ARROW_URL}
                ></RightArrow>
            </Container>
        </AnimatePresence>
    );
}

export default CategoryBar;
