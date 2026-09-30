import { salvarCadastro, obterCadastro } from "./storage.js";

export function restaurarCadastro() {
    const cadastro = obterCadastro();

    if (!cadastro) return;

    const campos = [
        "nome",
        "idade",
        "cpf",
        "cep",
        "email",
        "telefone"
    ];

    campos.forEach((campo) => {
        const elemento = document.querySelector(`[name="${campo}"]`);

        if (elemento) {
            elemento.value = cadastro[campo] || "";
        }
    });
}

export function processarFormulario(event) {
    if (event.target.tagName !== "FORM") return;

    event.preventDefault();

    const form = event.target;
    const dados = new FormData(form);
    const cadastro = Object.fromEntries(dados.entries());

    salvarCadastro(cadastro);

    const toast = document.querySelector(".toast");
    const modal = document.querySelector("#modal-sucesso");

    if (toast) {
        toast.style.display = "block";
    }

    if (modal) {
        modal.style.display = "flex";
    }
}

export function fecharModal(event) {
    if (!event.target.matches(".modal-conteudo button")) return;

    const modal = document.querySelector("#modal-sucesso");

    if (modal) {
        modal.style.display = "none";
    }
}