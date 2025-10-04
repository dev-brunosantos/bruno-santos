import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const TituloSecao = styled.div`
    width: 100%;
    /* padding: 0 34px; */
`;

export const TituloContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
`;

export const Linha = styled.div`
    width: 20%;
    border-bottom: 1px dashed #ccc;
    margin-top: 16px;
`;

export const ContainerBiografia = styled.div`
    width: 80%;  
    padding: 1rem;

    @media (max-width: 780px) {
        width: 100%;
        /* border: 1px solid red; */
        p {
            font-size: 14px;
        }
    }
`;

export const ContainerSkills = styled.div`
    width: 100%;
    height: auto;
    // marginLeft: 5%;
    padding: 1rem;
    border: 1px solid #dadada20;
    border-radius: 8px; 
    display: flex;
    flex-wrap: wrap;
    // gap: 1rem;
    justify-content: space-around;

    @media (max-width: 780px) {
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: flex-start;
    }
`;