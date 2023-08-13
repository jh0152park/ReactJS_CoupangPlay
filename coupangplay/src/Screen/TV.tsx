import { useQuery } from "react-query";
import {
    getAiringTodayTV,
    getOnTheAirTV,
    getPopularTV,
    getTopRatedTV,
} from "../API";
import Banner from "./Components/Banner";
import CategoryBar from "./Components/CategoryBar";
import TopTVs from "./Components/TopTVs";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";

function TV() {
    const MainTVs = useQuery(["mainTVs", "home"], () => getAiringTodayTV(1));
    const LikeTVs = useQuery(["likeTVs", "home"], () => getAiringTodayTV(2));
    const PopularTVs = useQuery(["popularTVs", "home"], () => getPopularTV(2));
    const TopRatedTVs = useQuery(["topRatedTVs", "home"], () =>
        getTopRatedTV(1)
    );
    const OnTheAirTVs = useQuery(["OnTheAirTVs", "home"], () =>
        getOnTheAirTV(1)
    );

    return (
        <>
            {MainTVs.isLoading ? null : (
                <Banner results={MainTVs.data.results}></Banner>
            )}
            <CategoryBar></CategoryBar>
            <TopTVs></TopTVs>

            {LikeTVs.isLoading && LikeTVs ? null : (
                <Slider
                    title="내가 좋아할 만한 콘텐츠"
                    results={LikeTVs.data?.results}
                    type="tv"
                ></Slider>
            )}
            {PopularTVs.isLoading && PopularTVs ? null : (
                <Slider
                    title="인기 콘텐츠"
                    results={PopularTVs.data?.results}
                    type="tv"
                ></Slider>
            )}
            {TopRatedTVs.isLoading && TopRatedTVs ? null : (
                <Slider
                    title="높은 평점의 콘텐츠"
                    results={TopRatedTVs.data?.results}
                    type="tv"
                ></Slider>
            )}
            {OnTheAirTVs.isLoading && OnTheAirTVs ? null : (
                <Slider
                    title="On The Air TV"
                    results={OnTheAirTVs.data?.results}
                    type="tv"
                ></Slider>
            )}
            <Footer></Footer>
        </>
    );
}

export default TV;
