document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado e analisado');

    const projetosList = document.getElementById('projetos-list');

    if (typeof projetos === 'undefined' || !Array.isArray(projetos)) {
        console.error('Dados do JSON não encontrados ou inválidos');
        return;
    }

    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card';

        const containerCard = document.createElement('div');
        containerCard.className = 'container-card';

        const leftCard = document.createElement('div');
        leftCard.className = 'left-card';

        const h3Name = document.createElement('h3');
        h3Name.textContent = projeto.name;
        leftCard.appendChild(h3Name);

        const pDescription = document.createElement('p');
        pDescription.textContent = projeto.description;
        leftCard.appendChild(pDescription);

        if (projeto.ilustracoes) {
            const h3Ilustracoes = document.createElement('h3');
            const aIlustracoes = document.createElement('a');
            aIlustracoes.href = projeto.ilustracoes;
            aIlustracoes.target = "_blank";
            aIlustracoes.textContent = "Ver fotos";
            h3Ilustracoes.appendChild(aIlustracoes);
            leftCard.appendChild(h3Ilustracoes);
        }

        if (projeto.funcionalidades) {
            const h3Funcionalidades = document.createElement('h3');
            const aFuncionalidades = document.createElement('a');
            aFuncionalidades.href = projeto.funcionalidades;
            aFuncionalidades.target = "_blank";
            aFuncionalidades.textContent = "Funcionalidades";
            h3Funcionalidades.appendChild(aFuncionalidades);
            leftCard.appendChild(h3Funcionalidades);
        }

        if (projeto.status) {
            const h3Status = document.createElement('h3');
            const aStatus = document.createElement('a');
            aStatus.href = projeto.status;
            aStatus.target = "_blank";
            aStatus.textContent = "Status de desenvolvimento";
            h3Status.appendChild(aStatus);
            leftCard.appendChild(h3Status);
        }

        if (projeto.extra) {
            const h3Extra = document.createElement('h3');
            const aExtra = document.createElement('a');
            aExtra.href = projeto.extra;
            aExtra.target = "_blank";
            aExtra.textContent = "Mídia extra";
            h3Extra.appendChild(aExtra);
            leftCard.appendChild(h3Extra);
        }

        containerCard.appendChild(leftCard);
        const rightCard = document.createElement('div');
        rightCard.className = 'right-card';
        containerCard.appendChild(rightCard);

        card.appendChild(containerCard);

        if (projeto.tags) {
            const cardTecnologias = document.createElement('div');
            cardTecnologias.className = 'card-tecnologias';
            const h3Tags = document.createElement('h3');
            h3Tags.textContent = projeto.tags;
            cardTecnologias.appendChild(h3Tags);
            card.appendChild(cardTecnologias);
        }

        projetosList.appendChild(card);
    });
});
