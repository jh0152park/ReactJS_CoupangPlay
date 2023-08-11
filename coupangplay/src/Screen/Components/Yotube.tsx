import YouTube from "react-youtube";

function Youtube({ key }: { key: string }) {
    const videoId = key;
    const option = {
        height: "360",
        width: "700",
        playerVars: {
            autoPlay: 1,
        },
    };

    console.log(videoId);
    console.log(key);
    console.log("youtube run");

    return <YouTube videoId={videoId} opts={option}></YouTube>;
}

export default Youtube;
