import styled from "styled-components";

export const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(/public/assets/images/${({filename}) => filename});
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
`;
