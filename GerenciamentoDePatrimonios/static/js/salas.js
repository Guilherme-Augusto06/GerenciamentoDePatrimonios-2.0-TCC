function redirecionarItensSala(sala) {
    const url = new URL(window.location.origin + "{% url 'buscar_itens_sala' %}");
    url.searchParams.set('sala', sala);  // Define o parâmetro 'sala'
    window.location.href = url.toString();  // Redireciona para a URL
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
function enableEdit() {
    // Permite a edição dos campos
    document.getElementById("descricaoInput").removeAttribute("readonly");
    document.getElementById("localizacaoInput").removeAttribute("readonly");
    document.getElementById("responsavelInput").removeAttribute("readonly");
    document.getElementById("quantidadeItensInput").removeAttribute("readonly");
    document.getElementById("link_imagemInput").removeAttribute("readonly");
    document.getElementById("email_responsavelInput").removeAttribute("readonly");
    
    // Mostra o botão de salvar e esconde o de editar
    document.getElementById("editButton").style.display = "none";
    document.getElementById("saveButton").style.display = "inline-block";

    // Altera a ação do formulário para o URL de atualização
    document.getElementById("itemForm").action = "{% url 'update_sala' %}";
}

function confirmDelete() {
    // Exibe uma mensagem de confirmação
    if (confirm("Tem certeza de que deseja excluir este item?")) {
        // Altera a ação do formulário para o URL de exclusão
        document.getElementById("itemForm").action = "{% url 'excluir_sala' %}";
        document.getElementById("itemForm").submit();
    }
}



function saveChanges() {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value; // Obtém o token CSRF
    const formData = {
        sala: document.getElementById("salaInput").value,
        descricao: document.getElementById("descricaoInput").value,
        localizacao: document.getElementById("localizacaoInput").value,
        link_imagem: document.getElementById("link_imagemInput").value,
        responsavel: document.getElementById("responsavelInput").value,
        quantidade_itens: document.getElementById("quantidadeItensInput").value,
        email_responsavel: document.getElementById("email_responsavelInput").value
        
    };

    // Faz uma requisição AJAX para enviar os dados ao servidor
    fetch('/update-sala/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken // Adiciona o token CSRF
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Item atualizado com sucesso!');
        } else {
            alert('Erro ao atualizar o item.');
        }
    })
    .catch(error => console.error('Erro:', error));

    // Alterna novamente os botões
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";

    // Desativa os campos de input
    document.getElementById("salaInput").setAttribute("readonly", true);
    document.getElementById("descricaoInput").setAttribute("readonly", true);
    document.getElementById("localizacaoInput").setAttribute("readonly", true);
    document.getElementById("link_imagemInput").setAttribute("readonly", true);
    document.getElementById("responsavelInput").setAttribute("readonly", true);
    document.getElementById("quantidadeItensInput").setAttribute("readonly", true);
    document.getElementById("email_responsavelInput").setAttribute("readonly", true);

}

function openItemModal(sala, descricao, localizacao, link_imagem, responsavel, email_responsavel, quantidade_itens) {
    document.getElementById('salaInput').value = sala;
    document.getElementById('descricaoInput').value = descricao;
    document.getElementById('localizacaoInput').value = localizacao;
    document.getElementById('link_imagemInput').value = link_imagem;
    document.getElementById('responsavelInput').value = responsavel;
    document.getElementById('email_responsavelInput').value = email_responsavel;
    document.getElementById('quantidadeItensInput').value = quantidade_itens;



    
    openModal('modalItem');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function openConfirmation() {
    document.getElementById('modalConfirmation').style.display = 'block';
}

function closeConfirmation() {
    document.getElementById('modalConfirmation').style.display = 'none';
    window.location.href = "{% url 'salas' %}";
}

document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch("{% url 'adicionar_salas' %}", {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            closeModal('modalAddItem');
            openConfirmation();
        } else {
            alert("Erro ao adicionar o item.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
    });
});

function openSala(sala) {
    // Código para abrir ou exibir informações da sala
    console.log("Sala visualizada:", sala);
}