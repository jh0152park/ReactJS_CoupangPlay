import { useHistory, useLocation, useParams } from "react-router-dom";
import {
    BackgroundImage,
    MovieDetail,
    Overlay,
} from "../Styled/BannerMovieDetailStyled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    BannerClickMovieBGLink,
    BannerClickMovieState,
    BannerDetailState,
} from "../../GlobalFeatures";
import { useQuery } from "react-query";
import { getMovieVideoInfo } from "../../API";
import Youtube from "./Yotube";

function Detail({ y }: { y: number }) {
    const History = useHistory();

    const setShowDetail = useSetRecoilState(BannerDetailState);
    const clickedMovieId = useRecoilValue(BannerClickMovieState);
    const clickedMovieBGLink = useRecoilValue(BannerClickMovieBGLink);

    const currntPath = useLocation().pathname.slice(1);
    const currentPathId = currntPath.split("main")[1];
    const isRealClicked = clickedMovieId === +currentPathId;

    let videoKey: string = "";
    const { data, isLoading } = useQuery(["movieVideo", currentPathId], () =>
        getMovieVideoInfo(+currentPathId)
    );

    function handleClickOutside() {
        setShowDetail(false);
        History.goBack();
    }

    function getVideoKey() {
        if (!isLoading && data?.results) {
            for (var i of data?.results) {
                if (
                    i.site.toLowerCase() === "youtube" &&
                    (i.type.toLowerCase() === "teaser" ||
                        i.type.toLowerCase() === "tailer")
                ) {
                    return i.key;
                }
            }
        }
    }

    videoKey = getVideoKey();
    console.log(videoKey);
    return (
        <>
            {isLoading ? null : (
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
                            >
                                <BackgroundImage>
                                    {videoKey ? (
                                        <Youtube key={videoKey}></Youtube>
                                    ) : null}
                                </BackgroundImage>
                            </MovieDetail>
                        </Overlay>
                    ) : null}
                </>
            )}
        </>
    );
}

export default Detail;

{
    /* <>
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
                    >
                        <BackgroundImage></BackgroundImage>
                    </MovieDetail>
                </Overlay>
            ) : null}
        </> */
}
