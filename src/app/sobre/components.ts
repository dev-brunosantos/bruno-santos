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
    padding: 0 34px;
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