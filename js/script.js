import { navegar } from "./router.js";
import { inicializarMenu } from "./menu.js";
import { processarFormulario, fecharModal } from "./formulario.js";
import { inicializarBibliotecas } from "./bibliotecas.js";

document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-rota]");

    if (!link) return;

    event.preventDefault();

    navegar(link.dataset.rota);
});

window.addEventListener("popstate", (event) => {
    const rota = event.state?.rota || "inicio";

    navegar(rota, false);
});

document.addEventListener("submit", processarFormulario);

document.addEventListener("click", fecharModal);

inicializarMenu();

inicializarBibliotecas();

const rotaInicial = location.hash.replace("#", "") || "inicio";

navegar(rotaInicial, false);