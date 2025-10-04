import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BtnRedesIcone } from "../Redes"

export const FooterContainer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div>
                    <h2>Bruno <span>Santos</span></h2>
                    <h3>Desenvolvedor <span>  Full Stack</span></h3>
                </div>

                <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <h2>Redes Sociais</h2>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <BtnRedesIcone>
                            <FaGithub size={20} color="white" />
                        </BtnRedesIcone>

                        <BtnRedesIcone>
                            <FaLinkedin size={20} color="white" />
                        </BtnRedesIcone>

                        <BtnRedesIcone>
                            <FaWhatsapp size={20} color="white" />
                        </BtnRedesIcone>
                    </div>
                </div>
            </div>

            <h5>
                © Copyright 2025. Made by Bruno Santos
            </h5>
        </div>
    )
}