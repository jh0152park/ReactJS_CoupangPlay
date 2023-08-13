import {
    COUPANGPLAY_ENTIRE_LOGO_URL,
    FB_LOGO_URL,
    IG_LOGO_URL,
    TWITTER_LOGO_URL,
    YOUTUBE_LOGO_URL,
} from "../../GlobalFeatures";
import { Column, Contrainer, FooterWrapper } from "../Styled/FooterStyled";

function Footer() {
    return (
        <FooterWrapper>
            <Contrainer>
                <Column>
                    <img src={COUPANGPLAY_ENTIRE_LOGO_URL}></img>
                    <p>버전: 1.41.11</p>
                </Column>
                <Column>
                    <p>쿠팡(주) | 대표이사: 박대준, 강한승</p>
                    <p>서울시 송파구 송파대로 570</p>
                    <p>사업자 등록번호: 120-88-00767</p>
                    <p>통신판매업신고: 2017-서울송파-0680</p>
                    <a>사업자 정보</a>
                </Column>
                <Column>
                    <p>고객센터: 1600–9800</p>
                    <p>대표 메일: playrepresent@coupang.com</p>
                    <p>제휴 문의: playbusiness@coupang.com</p>
                    <p>호스팅 서비스 사업자: AWS 코리아</p>
                    <p>
                        <a>서비스 이용약관</a>
                    </p>
                    <p>
                        <a>유료상품 이용약관</a>
                    </p>
                    <p>
                        <a>FAQ</a>
                    </p>
                    <p>
                        <a>개인벙보 처리방침</a>
                    </p>
                </Column>
                <Column>
                    <img src={YOUTUBE_LOGO_URL}></img>
                    <img src={FB_LOGO_URL}></img>
                    <img src={IG_LOGO_URL}></img>
                    <img src={TWITTER_LOGO_URL}></img>
                </Column>
            </Contrainer>
        </FooterWrapper>
    );
}

export default Footer;
