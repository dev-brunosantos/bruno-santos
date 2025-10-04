import type { ButtonHTMLAttributes } from "react";
import { BtnRedes } from "./component";

export interface BtnRedesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:  React.ReactNode;
}


export const BtnRedesIcone = ({ children, ...rest }: BtnRedesProps) => {
    return(
        <BtnRedes {...rest}>
            { children }
        </BtnRedes>
    )
}