import { Tela } from "../../components/Tela";
import { CardRedes } from "../../components/Redes/CardRedes";
import { ContainerInfor, TxtConteudo, TxtTitulo } from "./components";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <Tela centralizar id="home">
            <ContainerInfor>
                <TxtTitulo>
                    {/* Olá, eu sou o Bruno <span>Santos</span> */}
                    Olá, eu sou o 

                    <TypeAnimation sequence={[' Bruno Santos', 1500]} cursor={false} />
                
                </TxtTitulo>

                <TxtConteudo>
                    Sou desenvolvedor 
                    <span> 
                        <TypeAnimation 
                            sequence={[
                                '', 2000,
                                ' Front-end.', 1000,
                                ' Back-end.', 1000,
                                ' Mobile.', 1000,
                                ' Full Stack.', 1000,
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            
                        />
                    </span>
                </TxtConteudo>
            </ContainerInfor>

            <CardRedes />
        </Tela>
    )
}