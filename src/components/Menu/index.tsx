import { useState } from "react"
import { Cabecalho, Logo, Nav, Ul, Links } from "./componentes"
import { FaBars } from "react-icons/fa"

export const Menu = () => {

    const [telaAtiva, setTelaAtiva] = useState('home')
    const [abrirMenu, setAbrirMenu] = useState(false)

    function mudarTela(tela: string) {
        setTelaAtiva(tela)
    }

    return (
        <Cabecalho className="cabecalho">
            <Logo>
                {/* <h1>Bruno <span>Santos</span></h1> */}
                <h1>B<span>S</span></h1>
            </Logo>

            {/* <Nav style={{ display: abrirMenu ? 'flex' : 'none'}}> */}
            <Nav>
                <Ul style={{ height: abrirMenu ? '80vh' : '0', border: abrirMenu ? '1px solid var(--cinza)' : 'none' }}>
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

            <button onClick={() => setAbrirMenu(!abrirMenu)}>
                <FaBars size={30} color="var(--texto)" />
            </button>
        </Cabecalho>
    )
}