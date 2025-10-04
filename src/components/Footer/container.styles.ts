import styled from "styled-components";

export const ContainerTxt = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */

    @media (max-width: 780px) {
        height: 50px;
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerRedesInfor = styled.div`
    padding: 10px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    
    @media (max-width: 780px) {
        /* border: 1px solid red; */
        height: auto;
        padding: 0 2px;
        position: relative;
        h2 {
            display: none;
        }
    }
`;

export const RedesContent = styled.div`
    display: flex; 
    gap: 10px; 
    margin-top: 10px;
    
    @media (max-width: 780px) {
        height: 100%;
        gap: 0; 
        margin-bottom: 10px;
        /* border: 1px solid blue; */
    }
`;