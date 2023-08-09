import { useState } from "react";
import { LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../\bGlobalFeatures";
import {
    Category,
    Container,
    LeftArrow,
    RightArrow,
} from "../Styled/CategoryBarStyled";
import { CATEGORIES } from "../Types/CategoryBarTypes";

//0 - 10 / 10 - 23

function CategoryBar() {
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(10);
    const [dir, setDir] = useState<number>(1);

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
        updateIndex();
        setDir(-1);
    }

    function onRightArrowClick() {
        updateIndex();
        setDir(1);
    }

    return (
        <Container>
            <LeftArrow
                onClick={onLeftArrowClick}
                src={LEFT_ARROW_URL}
            ></LeftArrow>
            {CATEGORIES.slice(startIndex, endIndex).map((category) => (
                <Category length={category.length * 15}>{category}</Category>
            ))}
            <RightArrow
                onClick={onRightArrowClick}
                src={RIGHT_ARROW_URL}
            ></RightArrow>
        </Container>
    );
}

export default CategoryBar;
