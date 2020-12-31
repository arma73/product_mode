import { PublicLayout } from "_components/layout";
import Banner from "_components/banner";
import Products from "_components/products";

const Main = () => (
    <PublicLayout>
        <Banner filename="banner.jpeg" />
        <Products />
    </PublicLayout>
);

export default Main;
