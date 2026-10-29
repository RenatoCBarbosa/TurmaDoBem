document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. BOLINHA QUE SEGUE O MOUSE
  // ==========================================
  const bolinha = document.getElementById("cursor-bolinha");
  if (bolinha) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let bolinhaX = mouseX, bolinhaY = mouseY;
    const velocidade = 0.15;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animarBolinha() {
      bolinhaX += (mouseX - bolinhaX) * velocidade;
      bolinhaY += (mouseY - bolinhaY) * velocidade;
      bolinha.style.transform = `translate(${bolinhaX}px, ${bolinhaY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animarBolinha);
    }
    animarBolinha();
  }

  // ==========================================
  // 2. CARROSSEL (PÁGINA INÍCIO)
  // ==========================================
  const slides = document.querySelectorAll(".carrossel-slide");
  if (slides.length > 0) {
    let slideIndex = 0;
    let carrosselTimer;

    // Função global para os botões HTML "onclick" acharem
    window.mudaSlide = function(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      
      slides.forEach(slide => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
      
      clearInterval(carrosselTimer);
      carrosselTimer = setInterval(autoSlide, 4000);
    };

    function autoSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      slides.forEach(slide => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
    }

    // Inicia o timer automático
    carrosselTimer = setInterval(autoSlide, 4000);
  }

});

// ==========================================
// 3. ABAS (TABS) - PÁGINA SOBRE
// ==========================================
// Deixei fora do DOMContentLoaded para o HTML conseguir chamar direto no "onclick"
function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(tab => tab.classList.remove("active"));

  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// ==========================================
// 4. MODAL - PÁGINA FAQ
// ==========================================
// Deixei fora do DOMContentLoaded para o HTML conseguir chamar direto no "onclick"
function abrirModal(texto) {
  const modalTexto = document.getElementById("modal-texto");
  const modal = document.getElementById("meuModal");
  
  if (modalTexto && modal) {
    modalTexto.innerText = texto;
    modal.style.display = "block";
  }
}

function fecharModal() {
  const modal = document.getElementById("meuModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById("meuModal");
  if (modal && event.target == modal) {
    modal.style.display = "none";
  }
}

 const slides = document.querySelectorAll(".carrossel-slide");
  if (slides.length > 0) {
    let slideIndex = 0;
    let carrosselTimer;

    // Função global para os botões HTML "onclick" acharem
    window.mudaSlide = function(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      
      slides.forEach(slide => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
      
      clearInterval(carrosselTimer);
      carrosselTimer = setInterval(autoSlide, 4000);
    };

    function autoSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      slides.forEach(slide => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
    }

    // Inicia o timer automático
    carrosselTimer = setInterval(autoSlide, 4000);
  }