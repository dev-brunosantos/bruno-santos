import { styled } from 'styled-components';

export const Cabecalho = styled.header`
    width: 100vw;
    max-width: 1400px;
    height: 50px;
    margin: 0 auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: auto;
    color: var(--texto);
    background-color: #000;
    z-index: 999;

    button {
        display: none;
    }

    @media (max-width: 780px) {
        button {
            display: block;
            border: none;
            cursor: pointer;
            background-color: transparent;
        }
    }
`;

export const Logo = styled.div`
    width: auto;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const Nav = styled.nav`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    
    @media (max-width: 780px) {
        height: auto;
        position: absolute;
        top: 100%;
        right: 0;
        /* border: 1px solid var(--cinza); */
        background-color: var(--fundo);
    }
    `;

export const Ul = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    border: none;
    
    @media (max-width: 780px) {
        height: 0vh;
        overflow: hidden;
        flex-direction: column;
    }
`;

export const Links = styled.li`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    a {
        color: var(--texto);
        &:hover {
            color: var(--azul);
            transform: scale(1.1);
        }
    }
    @media (max-width: 780px) {
        font-size: 30px;
    }
`;