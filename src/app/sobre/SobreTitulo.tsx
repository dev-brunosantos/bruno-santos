
import { Linha, TituloContainer, TituloSecao } from "./components";

interface SobreTituloProps {
    titulo: string;
}

export const SobreTitulo = ({ titulo }: SobreTituloProps) => {
    return (
        <TituloSecao>
            <TituloContainer>
                <h2>
                    <span>{titulo}</span>
                </h2>

                <Linha />
            </TituloContainer>
        </TituloSecao>
    )
}