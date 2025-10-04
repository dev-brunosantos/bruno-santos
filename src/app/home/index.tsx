import { Tela } from "../../components/Tela";
import { CardRedes } from "../../components/Redes/CardRedes";
import { ContainerInfor, HomeRedes, TxtConteudo, TxtTitulo } from "./components";
import { TypeAnimation } from 'react-type-animation';
import { BtnRedesIcone } from "../../components/Redes";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
    return (
        <Tela centralizar id="home">
            <ContainerInfor>
                <TxtTitulo>
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

            <HomeRedes>
                {/* <CardRedes /> */}

                <BtnRedesIcone>
                    <span>
                        <FaGithub size={30} />
                    </span>
                </BtnRedesIcone>

                <BtnRedesIcone>
                    <span>
                        <FaLinkedin size={30} />
                    </span>
                </BtnRedesIcone>

                <BtnRedesIcone>
                    <span>
                        <FaWhatsapp size={30} />
                    </span>
                </BtnRedesIcone>
            </HomeRedes>
        </Tela>
    )
}