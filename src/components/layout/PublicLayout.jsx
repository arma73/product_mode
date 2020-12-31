import { PublicHeader } from "./header";
import Layout from "./Layout";
import * as S from "./style.sc";

const PublicLayout = ({ children }) => (
    <Layout>
        <PublicHeader />
        <S.Main>
            {children}
        </S.Main>
    </Layout>
);

export default PublicLayout;
