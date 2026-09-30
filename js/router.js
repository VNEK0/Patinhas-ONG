import { restaurarCadastro } from "./formulario.js";
import { configurarDataCampanha } from "./bibliotecas.js";

const conteudo = document.querySelector("#conteudo");

function renderizar(conteudoHTML) {
    if (!conteudo) return;

    conteudo.innerHTML = conteudoHTML;
}

const templates = {
    projetos: `
        <section data-aos="fade-up">
            <h2>Nossos Projetos</h2>

            <div class="badge" id="data-campanha"></div>

            <p>
                A PETS~HELP desenvolve diferentes ações para ajudar
                animais em situação de rua e também incentivar a
                participação da comunidade.
            </p>

            <article>
                <h3>🐾 Resgate e Acolhimento</h3>
                <p>
                    Realizamos o resgate de animais em situação de
                    vulnerabilidade, oferecendo alimentação, abrigo
                    temporário e cuidados básicos até que possam
                    encontrar um novo lar.
                </p>
            </article>

            <article>
                <h3>🩺 Assistência Veterinária</h3>
                <p>
                    Buscamos oferecer atendimento veterinário aos
                    animais resgatados, contando também com o apoio
                    de estudantes e profissionais da área.
                </p>
            </article>

            <article>
                <h3>✂️ Jornadas de Castração</h3>
                <p>
                    Promovemos campanhas de castração para contribuir
                    com o controle populacional e reduzir o número
                    de animais abandonados.
                </p>
            </article>

            <article>
                <h3>🤝 Apoio e Voluntariado</h3>
                <p>
                    Criamos oportunidades para que pessoas possam
                    participar das atividades da ONG, desenvolver
                    novas habilidades, conhecer outras pessoas e
                    contribuir com uma causa social.
                </p>
            </article>
        </section>

        <section data-aos="fade-up">
            <h2>Como Você Pode Ajudar</h2>

            <div class="alerta">
                <strong>Importante:</strong>
                Toda participação deve respeitar as orientações da PETS~HELP
                e o bem-estar dos animais.
            </div>

            <div class="ajude-cards">

                <article>
                    <h3>🤝 Seja Voluntário</h3>
                    <p>
                        Ajude nas atividades da ONG e participe
                        diretamente das ações de cuidado e proteção
                        dos animais.
                    </p>

                    <a href="cadastro.html" data-rota="cadastro">
                        Quero ser voluntário
                    </a>
                </article>

                <article>
                    <h3>💰 Faça uma Doação</h3>
                    <p>
                        Sua contribuição pode ajudar na compra de
                        alimentos, medicamentos e outros recursos
                        necessários para os animais.
                    </p>

                    <a href="cadastro.html" data-rota="cadastro">
                        Quero contribuir
                    </a>
                </article>

                <article>
                    <h3>🎓 Apoie como Estudante</h3>
                    <p>
                        Estudantes podem contribuir com conhecimentos,
                        projetos e experiências práticas, sempre com
                        orientação adequada.
                    </p>

                    <a href="cadastro.html" data-rota="cadastro">
                        Quero apoiar
                    </a>
                </article>

                <article>
                    <h3>❤️ Cuide de Quem Cuida</h3>
                    <p>
                        Tenha um momento de convivência com os animais
                        da PETS~HELP. Brinque, faça companhia ou
                        simplesmente passe um tempo ao lado de um animal
                        que também precisa de carinho e atenção.
                    </p>

                    <a href="cadastro.html" data-rota="cadastro">
                        Quero participar
                    </a>
                </article>

            </div>
        </section>
    `,

    cadastro: `
        <h2>Cadastro de Participação</h2>

        <p>
            Preencha seus dados para demonstrar interesse em participar
            das atividades da PETS~HELP.
        </p>

        <form>

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="idade">Idade:</label>
                <input type="number" id="idade" name="idade" min="18" required>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                    required>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    placeholder="00000-000"
                    required>
            </fieldset>

            <fieldset>
                <legend>Dados de contato</legend>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required>
            </fieldset>

            <fieldset>
                <legend>Interesse</legend>

                <label for="interesse">Como deseja participar?</label>

                <select id="interesse" name="interesse" required>
                    <option value="">Selecione uma opção</option>
                    <option value="adocao">Quero adotar um animal</option>
                    <option value="voluntario">Quero ser voluntário</option>
                    <option value="doacao">Quero fazer uma doação</option>
                    <option value="estudante">Quero apoiar como estudante</option>
                </select>

                <label for="mensagem">
                    Conte um pouco sobre seu interesse:
                </label>

                <textarea id="mensagem" name="mensagem" rows="5"></textarea>
            </fieldset>

            <button type="submit">Enviar Cadastro</button>

            <div class="modal" id="modal-sucesso">
                <div class="modal-conteudo">
                    <h3>Cadastro enviado!</h3>

                    <p>
                        Obrigado por demonstrar interesse em participar
                        da PETS~HELP.
                    </p>

                    <button type="button">Fechar</button>
                </div>
            </div>

            <div class="toast">
                <strong>Sucesso!</strong>
                Seu cadastro foi enviado com sucesso.
            </div>

        </form>
    `
};

const conteudoInicial = conteudo ? conteudo.innerHTML : "";

export function navegar(rota, atualizarHistorico = true) {
    if (rota === "inicio") {
        renderizar(conteudoInicial);
    }

    if (rota === "projetos") {
        renderizar(templates.projetos);
        configurarDataCampanha();
    }

    if (rota === "cadastro") {
        renderizar(templates.cadastro);
        restaurarCadastro();
    }

    sessionStorage.setItem("rotaAtual", rota);

    if (atualizarHistorico) {
        history.pushState(
            { rota: rota },
            "",
            `#${rota}`
        );
    }
}