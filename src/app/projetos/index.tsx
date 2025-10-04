import { CardProjeto } from "../../components/Cards/CardProjeto";
import { Tela, TelaContainer } from "../../components/Tela";

export default function Projetos() {

    const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Tela centralizar id="projetos">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                <span>Projetos</span>
            </h1>

            <TelaContainer backgroundColor="#23989570">
                {
                    teste.map((card) => (
                        <CardProjeto key={card} />
                    ))
                }
            </TelaContainer>
        </Tela>
    )
}