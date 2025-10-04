import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BtnRedesIcone } from "."

export const CardRedes = () => {
    return (
        <div className="redes-sociais">
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
        </div>
    )
}