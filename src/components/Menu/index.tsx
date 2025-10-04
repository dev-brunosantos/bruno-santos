import { Cabecalho, Logo, Nav, Ul, Links } from "./componentes"

export const Menu = () => {
    return (
        <Cabecalho className="cabecalho">
            <Logo>
                {/* <h1>Bruno <span>Santos</span></h1> */}
                <h1>B<span>S</span></h1>
            </Logo>

            <Nav>
                <Ul>
                    <Links id="home">
                        <a href="#home">Home</a>
                    </Links>
                    <Links id="sobre">
                        <a href="#sobre">Sobre</a>
                    </Links>
                    <Links id="projetos">
                        <a href="#projetos">Projetos</a>
                    </Links>
                    <Links id="contato">
                        <a href="#contato">Contato</a>
                    </Links>
                </Ul>
            </Nav>
        </Cabecalho>
    )
}