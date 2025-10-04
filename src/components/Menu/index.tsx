import { useState } from "react"
import { Cabecalho, Logo, Nav, Ul, Links } from "./componentes"

export const Menu = () => {

    const [telaAtiva, setTelaAtiva] = useState('home')

    function mudarTela(tela: string) {
        setTelaAtiva(tela)
    }

    return (
        <Cabecalho className="cabecalho">
            <Logo>
                {/* <h1>Bruno <span>Santos</span></h1> */}
                <h1>B<span>S</span></h1>
            </Logo>

            <Nav>
                <Ul>
                    <Links>
                        <a href="#home" style={{ color: telaAtiva == 'home' ? 'var(--azul)' : '', }} onClick={() => mudarTela('home')}>
                            Home
                        </a>
                    </Links>
                    <Links>
                        <a href="#sobre" style={{ color: telaAtiva == 'sobre' ? 'var(--azul)' : '' }} onClick={() => mudarTela('sobre')}>
                            Sobre
                        </a>
                    </Links>
                    <Links>
                        <a href="#projetos" style={{ color: telaAtiva == 'projetos' ? 'var(--azul)' : '' }} onClick={() => mudarTela('projetos')}>
                            Projetos
                        </a>
                    </Links>
                    <Links>
                        <a href="#contatos" style={{ color: telaAtiva == 'contatos' ? 'var(--azul)' : '' }} onClick={() => mudarTela('contatos')}>
                            Contato
                        </a>
                    </Links>
                </Ul>
            </Nav>
        </Cabecalho>
    )
}