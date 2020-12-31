import { Link } from "react-router-dom";
import LogoDefault from "_theme/icons/logo/logo-default.svg";
import { MAIN_PAGE_ROUTE } from "_settings/routes";
import * as S from "./style.sc";

const Logo = () => (
    <S.Logo>
        <Link to={MAIN_PAGE_ROUTE}>
            <S.LogoTitle> Sliceline </S.LogoTitle>
            <LogoDefault
                width="30px"
                height="30px"
            />
        </Link>
    </S.Logo>
);

export default Logo;
