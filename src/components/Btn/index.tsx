import type { ButtonHTMLAttributes } from "react"
import { Btn } from "./component"

interface BtnComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo?: string;
    borderColor?: string;
}

export const BtnComponent = ({ titulo, borderColor, ...rest }: BtnComponentProps) => {
    return(
        <Btn style={{ borderColor: borderColor }} {...rest}>
            {titulo}
        </Btn>
    )
}