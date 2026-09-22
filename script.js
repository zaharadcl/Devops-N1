document.addEventListener("DOMContentLoaded", () => {

    const btnRepo = document.getElementById("btnAcessarRepo");

    if (btnRepo) {
        btnRepo.addEventListener("click", () => {

            const urlRepositorio = "https://github.com/zaharadcl/Devops-N1";

            window.open(urlRepositorio, "_blank");
        });
    }

    console.log("Interface do Projeto DevOps carregada com sucesso!");
});