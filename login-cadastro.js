const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function redirecionarUsuario() {
    // Adicionar aq o código para verificar as credenciais do usuário.
    // Se as credenciais forem válidas, redirecione para headphone.html (pagina principal).
    window.location.href = "index.html";

    // Se forem inválidas, mensagem dizendo login inválido.
    return false;  // Impede o envio do formulário.
};


