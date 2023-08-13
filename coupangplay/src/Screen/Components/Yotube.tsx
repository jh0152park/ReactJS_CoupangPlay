import YouTube from "react-youtube";

function Youtube({
    videoKey,
    width,
    height,
}: {
    videoKey: string;
    width: string;
    height: string;
}) {
    const videoId = videoKey;
    const option = {
        height: height,
        width: width,
        playerVars: {
            autoPlay: 1,
        },
    };

    return (
        <YouTube
            videoId={videoId}
            opts={option}
            onEnd={(e) => {
                e.target.stopVideo(0);
            }}
            onReady={(e) => {
                e.target.playVideo(true);
            }}
        ></YouTube>
    );
}

export default Youtube;
