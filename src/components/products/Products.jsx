import Card from "_components/card";
import { foodSections } from "_settings/mocks/food-sections_mock";
import * as S from "./style.sc";

const Products = () => {
    const mapCards = items => items.map(item => <Card key={item.name} item={item} />);

    const mapProducts = () => foodSections.map(([title, products]) => (
        <section key={title}>
            <h1 style={{ "textTransform": "capitalize" }}> {title} </h1>
            <S.Cards>
                {mapCards(products)}
            </S.Cards>
        </section>
    ));
    
    return (
        <S.Products>
            {mapProducts()}
        </S.Products>
    );
};

export default Products;
