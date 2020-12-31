import styled from "styled-components";

export const Card = styled.div`
    height: 100px; 
    padding: 10px; 
    font-size: 20px;
    position: relative;
    background-image: url(/public/assets/images/${({ filename }) => filename});
    background-position: center;
    background-size: cover;
    filter: contrast(75%); 
    border-radius: 7px; 
    margin-top: 5px; 
    transition-property: box-shadow margin-top filter; 
    transition-duration: .1s; 
    box-shadow: 0px 0px 2px 0px grey;

    &:hover {
        cursor: pointer; 
        filter: contrast(100%); 
        margin-top: 0px; 
        margin-bottom: 5px; 
        box-shadow: 0px 5px 10px 0px grey;
    }
`;

export const CardName = styled.div`
    font-family: var(--main-font-family);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
`;
