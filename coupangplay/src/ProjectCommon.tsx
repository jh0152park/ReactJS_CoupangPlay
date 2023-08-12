import { useHistory } from "react-router-dom";

export const SlideVariants = {
    start: (direction: number) => ({
        x: (window.outerWidth + 5) * direction,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: (-window.outerWidth - 5) * direction,
    }),
};
