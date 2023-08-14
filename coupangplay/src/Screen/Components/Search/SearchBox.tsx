import { useForm } from "react-hook-form";
import { SEARCH_URL, SearchLogo } from "../../Styled/HeaderStyled";
import {
    Form,
    Input,
    SearchBoxContainer,
} from "../../Styled/Search/SearchBoxStlyed";
import { useSetRecoilState } from "recoil";
import { SearchKeywordState } from "../../../ProjectCommon";
import { useHistory } from "react-router-dom";

function SearchBox() {
    const History = useHistory();
    const setSearchKeyword = useSetRecoilState(SearchKeywordState);
    const { register, setValue, setFocus, handleSubmit } = useForm();

    function handleSearchIconClick() {
        setFocus("input");
    }

    function handleFormSubmit(data: any) {
        const search_keyword = data.input;

        setSearchKeyword(search_keyword);
        setValue("input", "");
        History.push("/Search/result/" + search_keyword);
        console.log("search keyworkd: " + search_keyword);
    }

    return (
        <SearchBoxContainer>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input
                    {...register("input", { required: true })}
                    placeholder="제목, 장르, 배우로 검색해보세요"
                ></Input>
                <SearchLogo onClick={handleSearchIconClick} src={SEARCH_URL} />
            </Form>
        </SearchBoxContainer>
    );
}

export default SearchBox;
