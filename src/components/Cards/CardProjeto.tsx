import { Card, CardConteudo, CardImagem } from "./component"
import { FaReact, } from 'react-icons/fa';
import { SiTypescript, } from 'react-icons/si';
import { BtnComponent } from "../Btn";

export const CardProjeto = () => {
    return (
        <Card>
            <CardImagem>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLEXczNErMQVc6l9ay0rgQeOJhFXGy-WpYw&s" alt="" />
            </CardImagem>

            <CardConteudo>
                <div style={{ borderBottom: '1px solid #dadada80', paddingBottom: '5px' }}>
                    <h3>Titulo do Projeto</h3>
                    <h5><span>Descricao do projeto</span></h5>
                </div>

                <div style={{
                    padding: '5px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <FaReact size={20} color="#61DAFB" />
                    <SiTypescript size={20} color="#3178C6" />
                </div>

                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <BtnComponent titulo="Projeto" borderColor="var(--texto)" />
                    <BtnComponent titulo="Código" borderColor="var(--texto)" />
                </div>
            </CardConteudo>
        </Card>
    )
}