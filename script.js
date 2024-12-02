document.getElementById('loginButton').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('submitLogin').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Sistema de login fake
    if (username === 'usuario' && password === 'senha') {
        message.textContent = 'Login bem-sucedido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuário ou senha incorretos!';
        message.style.color = 'red';
    }
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Animação ao clicar nos cursos
function animateCourse(element) {
    element.classList.add('animate');

    setTimeout(function() {
        element.classList.remove('animate');
    }, 500);
}