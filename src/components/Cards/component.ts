import styled from "styled-components";

export const Card = styled.div`
    width: 280px;
    height: 350px;
    max-height: auto;
    border: 1px solid #dadada80;
    border-radius: 10px;
    overflow: hidden;
    background-color: #000;

    @media (max-width: 780px) {
        min-width: 80vw;
    }
`;

export const CardImagem = styled.div`
    width: 100%;
    height: 55%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardConteudo = styled.div`
    width: 100%;
    height: 45%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
`;

// Card Skill

export const CardSkillContainer = styled.div`
    width: 200px;
    height: auto;
    /* padding: 1rem; */
    border-radius: 8px;
    border: 1px solid var(--azul);
    box-shadow: 1px 2px 10px var(--azul2);
    overflow: hidden;

    ul {
        margin-left: 1rem;
    }

    li {
        list-style-type: square;
        color: #eaeaea80;
        &:hover {
        color: var(--azul);
        transform: scale(1.1);
        transition: 0.3s;
    }
    }

    @media (max-width: 780px) {
        min-width: 55vw;
        /* max-width: 30vw; */
        margin: 10px 10px;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`;