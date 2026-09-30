export function inicializarBibliotecas() {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true
        });
    }
}

export function configurarDataCampanha() {
    const elemento = document.querySelector("#data-campanha");

    if (!elemento || typeof dayjs === "undefined") return;

    const dataCampanha = dayjs().add(30, "day");

    elemento.textContent =
        `Próxima jornada de castração: ${dataCampanha.format("DD/MM/YYYY")}`;
}