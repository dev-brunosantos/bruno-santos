import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BtnRedesIcone } from "../Redes"
import { ContainerRedesInfor, ContainerTxt, RedesContent } from "./container.styles"

export const FooterContainer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <ContainerTxt>
                    <h2>Bruno <span>Santos</span></h2>
                    <h3>Desenvolvedor <span>  Full Stack</span></h3>
                </ContainerTxt>

                <ContainerRedesInfor>

                    <h2>Redes Sociais</h2>

                    <RedesContent>
                        <BtnRedesIcone>
                            <FaGithub size={20} color="white" />
                        </BtnRedesIcone>

                        <BtnRedesIcone>
                            <FaLinkedin size={20} color="white" />
                        </BtnRedesIcone>

                        <BtnRedesIcone>
                            <FaWhatsapp size={20} color="white" />
                        </BtnRedesIcone>
                    </RedesContent>
                </ContainerRedesInfor>
            </div>

            <h5>
                © Copyright 2025. Made by Bruno Santos
            </h5>
        </div>
    )
}