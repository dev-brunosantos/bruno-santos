import styled from "styled-components";

export const ContainerInfor = styled.div`
    width: 80%;
    /* border: 1px solid blue; */

    @media (max-width: 780px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const TxtTitulo = styled.h1`
    font-size: 3.5rem;
    color: white;
    margin-bottom: 20px;

    @media (max-width: 780px) {
         /* border: 1px solid red; */
        width: 80%;
        height: 150px;
        font-size: 2.5rem;
        text-align: center;
    }
`;

export const TxtConteudo = styled.h2`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
    
    @media (max-width: 780px) {
        /* border: 1px solid red; */
        width: 68.5%;
        height: 100px;
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const HomeRedes = styled.div`
    position: absolute; 
    left: auto; 
    bottom: 2rem; 
    display: flex; 
    align-items: center; 
    gap: 22px;

    @media (min-width: 1020px) {
        display: none;
    }
`;