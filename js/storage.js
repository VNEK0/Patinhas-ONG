const CHAVE_CADASTRO = "cadastroPETSHelp";

export function salvarCadastro(cadastro) {
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(cadastro));
}

export function obterCadastro() {
    const dadosSalvos = localStorage.getItem(CHAVE_CADASTRO);

    if (!dadosSalvos) return null;

    return JSON.parse(dadosSalvos);
}