import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BtnRedesIcone } from "."

export const CardRedes = () => {
    return (
        <div className="redes-sociais">
            <BtnRedesIcone>
                <FaGithub size={20} />
            </BtnRedesIcone>

            <BtnRedesIcone>
                <FaLinkedin size={20} />
            </BtnRedesIcone>

            <BtnRedesIcone>
                <FaWhatsapp size={20} />
            </BtnRedesIcone>
        </div>
    )
}