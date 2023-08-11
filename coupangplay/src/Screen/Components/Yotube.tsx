import YouTube from "react-youtube";

function Youtube({ videoKey }: { videoKey: string }) {
    console.log(videoKey);
    const videoId = videoKey;
    const option = {
        height: "360",
        width: "700",
        playerVars: {
            autoPlay: 1,
        },
    };

    console.log(videoId);

    console.log("youtube run");

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