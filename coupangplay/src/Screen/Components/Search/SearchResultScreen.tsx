import { useRecoilValue } from "recoil";
import { MessageBox } from "../../Styled/Search/SearchResultStyled";
import { SearchKeywordState } from "../../../ProjectCommon";

function SearchResultScreen() {
    const searchKeyword = useRecoilValue(SearchKeywordState);

    return <MessageBox>{`Search results about "${searchKeyword}"`}</MessageBox>;
}

export default SearchResultScreen;
