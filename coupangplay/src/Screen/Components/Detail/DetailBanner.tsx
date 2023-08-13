import { useQuery } from "react-query";
import { IDetail } from "../../../GlobalFeatures";
import { getMovieDetail } from "../../../API";

function DetailBanner({ id }: { id: string | number }) {
    let backdrop_path = "";
    let poster_path = "";
    let genres: "";
    let homepage = "";
    let overview = "";
    let release_date = "";
    let runtime = 0;
    let title = "";
    let vote_average = 0;
    let vote_count = 0;

    const detail = useQuery<IDetail>(["movie_detail_page", id], () =>
        getMovieDetail(id)
    );

    function getGenres() {
        if (!detail.isLoading && detail.data) {
            let gen = "";
            for (var i of detail.data.genres) {
                gen += i.name + ", ";
            }
            return gen.slice(0, gen.length - 2);
        }
    }

    function getProduction() {
        if (!detail.isLoading && detail.data) {
            let pro = "";
            for (var i of detail.data.production_companies) {
                pro += i.name + ", ";
            }
            return pro.slice(0, pro.length - 2);
        }
    }

    console.log(detail.data);

    return <>{detail.isLoading ? null : "Hello"}</>;
}

export default DetailBanner;
