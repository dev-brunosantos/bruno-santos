import { CardSkill } from "../../components/Cards/CardSkill";
import { Tela } from "../../components/Tela";
import { Container, ContainerSkills, ContainerBiografia } from "./components";
import { SobreTitulo } from "./SobreTitulo";

export default function Sobre() {
    return (
        <Tela centralizar id="sobre">
            <Container>
                <SobreTitulo titulo="Sobre mim" />

                <ContainerBiografia>
                    {/* <h3 style={{ textDecoration: 'underline' }}>Bruno Santos</h3> */}

                    <p>
                        Sou desenvolvedor com experiência em JavaScript, TypeScript, Node.js e C#, atuando no desenvolvimento de soluções escaláveis e integrações de sistemas.
                    </p>
                    <p>
                        Carreira construída na Tok&Stok com passagens por QA/NOC, Help Desk e Desenvolvimento Back-End Jr., o que proporciona uma visão ampla de TI — desde suporte ao usuário até implementação de APIs e integrações complexas.
                    </p>

                    <p>
                        Experiência em metodologias ágeis (Scrum), análise de problemas e automação de processos.
                    </p>
                </ContainerBiografia>

                <SobreTitulo titulo="Minhas Skills" />

                <ContainerSkills>
                    <CardSkill titulo="Front-end">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                        <li>Styled Components</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                        <li>Next</li>
                        <li>Electron</li>
                    </CardSkill>

                    {/* <CardSkill titulo="Mobile" posicao="3rem"> */}
                    <CardSkill titulo="Mobile">
                        <li>React Native</li>
                    </CardSkill>

                    <CardSkill titulo="Back-end">
                        <li>JavaScript / TypeScript / Node.Js</li>
                        <li>C#</li>
                        <li>Python</li>
                    </CardSkill>

                    {/* <CardSkill titulo="ORM" posicao="3rem"> */}
                    <CardSkill titulo="ORM">
                        <li>Prisma</li>
                        <li>TypeORM</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                    </CardSkill>

                    <CardSkill titulo="Banco de Dados">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Oracle SQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>Supabase</li>
                    </CardSkill>
                </ContainerSkills>
            </Container>
        </Tela>
    )
}