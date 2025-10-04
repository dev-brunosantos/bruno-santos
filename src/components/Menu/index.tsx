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
                    <Links>
                        <a href="#home">Home</a>
                    </Links>
                    <Links>
                        <a href="#sobre">Sobre</a>
                    </Links>
                    <Links>
                        <a href="#projetos">Projetos</a>
                    </Links>
                    <Links>
                        <a href="#contatos">Contato</a>
                    </Links>
                </Ul>
            </Nav>
        </Cabecalho>
    )
}