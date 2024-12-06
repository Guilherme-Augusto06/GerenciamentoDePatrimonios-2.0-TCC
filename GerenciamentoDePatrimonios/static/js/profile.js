function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";  // Define 'flex' para centralizar a modal
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Fecha a modal se clicar fora dela
window.onclick = function(event) {
    var emailModal = document.getElementById('emailModal');
    var nameModal = document.getElementById('nameModal');
    var lastNameModal = document.getElementById('lastNameModal');

    if (event.target == emailModal) {
        emailModal.style.display = "none";
    }
    if (event.target == nameModal) {
        nameModal.style.display = "none";
    }
    if (event.target == lastNameModal) {
        lastNameModal.style.display = "none";
    }
}




function saveSala() {
    const selectedSala = document.getElementById("selectSala").value; // Obtém o valor selecionado
    document.getElementById("sala").value = selectedSala; // Atualiza o valor do input
    closeModal('salaModal'); // Fecha a modal
    alert(`Sala atualizada para: ${selectedSala}`); // Alerta de confirmação
}



function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add("show"); // Adiciona a classe show para mostrar a modal
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove("show"); // Remove a classe show para esconder a modal
    modal.style.transition = "opacity 0.3s ease";
    modal.style.opacity = "0"; // Transição para a opacidade 0 durante o fechamento

    setTimeout(function() {
        modal.style.display = "none"; // Após a transição, esconda a modal
    }, 300); // Tempo igual à duração da transição
}

window.onclick = function(event) {
    var emailModal = document.getElementById('emailModal');
    var nameModal = document.getElementById('nameModal');
    var lastNameModal = document.getElementById('lastNameModal');

    if (event.target == emailModal) {
        closeModal('emailModal');
    }
    if (event.target == nameModal) {
        closeModal('nameModal');
    }
    if (event.target == lastNameModal) {
        closeModal('lastNameModal');
    }
}

