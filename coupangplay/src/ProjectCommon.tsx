export const SlideVariants = {
    start: (direction: number) => ({
        x: (window.outerWidth + 10) * direction,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: (-window.outerWidth - 10) * direction,
    }),
};
