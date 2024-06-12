document.addEventListener('DOMContentLoaded', function() {

    const projetosList = document.getElementById('projetos-list');

    if (typeof projetos === 'undefined' || !Array.isArray(projetos)) {
        console.error('Dados do JSON não encontrados ou inválidos');
        return;
    }
    projetos.forEach(projeto => {
        const projectCard = createProjectCard(projeto);
        projetosList.appendChild(projectCard);
    });

    function createProjectCard(projeto) {
        const card = document.createElement('div');
        const containerCard = document.createElement('div');
        const parentCard = document.createElement('div');
        const h3Name = document.createElement('h3');
        const pDescription = document.createElement('p');

        card.className = 'card';
        containerCard.className = 'container-card';

        h3Name.textContent = projeto.name;
        pDescription.textContent = projeto.description;

        parentCard.appendChild(h3Name);
        parentCard.appendChild(pDescription);

        parentCardBuilder(projeto, 'ilustracoes', 'Ver fotos', parentCard, containerCard, card);
        parentCardBuilder(projeto, 'funcionalidades', 'Funcionalidades', parentCard, containerCard, card);
        parentCardBuilder(projeto, 'status', 'Status de desenvolvimento', parentCard, containerCard, card);
        parentCardBuilder(projeto, 'extra', 'Mídia extra', parentCard, containerCard, card);

        if (projeto.tags) {
            const cardTags = document.createElement('div');
            cardTags.className = 'card-tecnologias';
            const h3Tags = document.createElement('h3');
            h3Tags.textContent = projeto.tags;
            cardTags.appendChild(h3Tags);
            card.appendChild(cardTags);
        }
        return card;
    }

    function parentCardBuilder(projeto, field, fieldName, parentCard, containerCard, card) {
        if (projeto[field]) {
            const h3Field = document.createElement('h3');
            const aField = document.createElement('a');
    
            aField.href = projeto[field];
            aField.target = "_blank";
            aField.textContent = fieldName;
    
            h3Field.appendChild(aField);
            parentCard.appendChild(h3Field);
            containerCard.appendChild(parentCard);

            card.appendChild(containerCard);
        }
    }
});