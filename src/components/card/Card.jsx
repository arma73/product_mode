import * as S from "./style.sc";

const Card = ({ item }) => (
    <S.Card filename={item.filename}>
        <S.CardName>
            {item.name}
        </S.CardName>
    </S.Card>
);

export default Card;
