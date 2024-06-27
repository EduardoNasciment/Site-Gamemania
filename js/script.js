document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            menu.classList.toggle("active");
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "" || password === "") {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Login realizado com sucesso!");
                // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
            }
        });
    }

    const cadastroForm = document.getElementById("cadastro-form");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("cadastro-email").value;
            const password = document.getElementById("cadastro-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (email === "" || password === "" || confirmPassword === "") {
                alert("Por favor, preencha todos os campos.");
            } else if (password !== confirmPassword) {
                alert("As senhas não coincidem.");
            } else {
                alert("Cadastro realizado com sucesso!");
                // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
            }
        });
    }
});
