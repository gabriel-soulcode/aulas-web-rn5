const imagemPrincipal = document.querySelector("#imagem-principal");
const imagens = document.querySelectorAll(".imagens");

for (let imagem of imagens) {
    imagem.addEventListener("click", () => {
        const imagemAtual = imagemPrincipal.src;
        imagemPrincipal.src = imagem.src;
        imagem.src = imagemAtual;
    });
}