import styled from "styled-components";

export const Btn = styled.button`
    border: 1px solid;
    border-radius: 5px;
    padding: 8px 15px;
    background-color: transparent;
    text-align: center;
    color: var(--texto);
    &:hover {
        border-color: var(--azul);
        box-shadow: 1px 1px 10px var(--azul2);
        cursor: pointer;
    }
`;