document.addEventListener("DOMContentLoaded", () => {
  
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const form = document.getElementById("form-contato");
  
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      
      let isValid = true;

      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      const mensagem = document.getElementById("mensagem");

      document.querySelectorAll(".form-group").forEach(group => group.classList.remove("error"));

      if (nome.value.trim().length < 3) {
        showError(nome, "O nome precisa ter pelo menos 3 caracteres.");
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        showError(email, "Digite um e-mail válido (exemplo@dominio.com).");
        isValid = false;
      }

      if (mensagem.value.trim() === "") {
        showError(mensagem, "A mensagem não pode ficar em branco.");
        isValid = false;
      }

      if (isValid) {
        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
        form.reset();
      }
    });
  }

  function showError(input, message) {
    const formGroup = input.parentElement; // Pega a div .form-group
    const errorMsg = formGroup.querySelector(".error-msg");
    
    formGroup.classList.add("error"); // Adiciona a borda vermelha
    errorMsg.textContent = message;   // Adiciona a mensagem de erro
  }
});