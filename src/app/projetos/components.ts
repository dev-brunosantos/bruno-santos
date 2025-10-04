import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    border: 1px solid #dadada20;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around
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