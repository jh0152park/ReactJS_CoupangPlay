import { useHistory, useLocation, useParams } from "react-router-dom";
import {
    MovieDetail,
    MovieDetailVariants,
    Overlay,
} from "../Styled/BannerMovieDetailStyled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BannerClickMovieState, BannerDetailState } from "../../GlobalFeatures";
import { AnimatePresence } from "framer-motion";

function Detail({ y }: { y: number }) {
    const History = useHistory();
    const setShowDetail = useSetRecoilState(BannerDetailState);
    const clickedMovieId = useRecoilValue(BannerClickMovieState);
    const currntPath = useLocation().pathname.slice(1);
    const currentPathId = currntPath.split("main")[1];
    const isRealClicked = clickedMovieId === +currentPathId;

    function handleClickOutside() {
        setShowDetail(false);
        History.goBack();
    }

    console.log(currntPath);
    return (
        <>
            {isRealClicked ? (
                <Overlay
                    onClick={handleClickOutside}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <MovieDetail
                        style={{ top: y + 200 }}
                        layoutId={currntPath}
                        transition={{
                            type: "tween",
                        }}
                    ></MovieDetail>
                </Overlay>
            ) : null}
        </>
    );
}

export default Detail;
