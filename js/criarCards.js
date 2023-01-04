criarCard("DukaSushi");
criarCard("TechWord");
criarCard("DoceOnda");
criarCard("Nubank");
criarCard("Netflix");
criarCard("Reciclarte");

function criarCard(infor) {

    projetosContainer.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="`+projetos[infor].img+`" alt="...">
            </div>
            <div class="card-info centralizar">
                <h2 class="card-title">`+projetos[infor].nome+`</h2>
                <p class="card-text">`+projetos[infor].informacao+`</p>
                <a href="#" class="btn-projeto">Ver Projeto</a>
            </div>
        </div>
    `
}