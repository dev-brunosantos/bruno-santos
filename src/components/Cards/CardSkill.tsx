import { CardSkillContainer } from "./component";

export interface CardSkillProps {
    titulo: string;
    children: React.ReactNode;
    posicao?: string;
}

export const CardSkill = ({ titulo, children, posicao }: CardSkillProps) => {
    return (
        <CardSkillContainer
            style={{ marginTop: posicao }}
        >
            <div style={{ border: '1px solid #dadada20', padding: '0.5rem' }}>
                <h3>
                    <span>
                        {titulo}
                    </span>
                </h3>
            </div>

            <div style={{ padding: '1rem' }}>
                <ul>
                    {children}
                </ul>
            </div>
        </CardSkillContainer>
    )
}