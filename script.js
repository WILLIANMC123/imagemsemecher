// Espera a página carregar antes de executar o script
window.onload = function() {
    
    // Seleciona os elementos que vamos usar
    const image = document.getElementById('movable-image');
    const container = document.getElementById('container');

    // Posição inicial
    let x = 0;
    let y = 0;

    // Velocidade (quantos pixels mover por quadro)
    let dx = 2; // Velocidade horizontal (2 pixels para a direita)
    let dy = 2; // Velocidade vertical (2 pixels para baixo)

    // Pega as dimensões da caixa e da imagem
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

    // Função que atualiza a animação (o "loop" do jogo)
    function animate() {
        // 1. Verifica Colisão Horizontal (paredes esquerda/direita)
        if (x + imageWidth > containerWidth || x < 0) {
            dx = -dx; // Inverte a direção horizontal
        }

        // 2. Verifica Colisão Vertical (paredes cima/baixo)
        if (y + imageHeight > containerHeight || y < 0) {
            dy = -dy; // Inverte a direção vertical
        }

        // 3. Atualiza a posição
        x = x + dx;
        y = y + dy;

        // 4. Aplica a nova posição à imagem
        image.style.left = x + 'px';
        image.style.top = y + 'px';

        // 5. Pede ao navegador para chamar esta função novamente
        // no próximo quadro de animação (cria um loop suave)
        requestAnimationFrame(animate);
    }

    // Inicia a animação
    animate();
};
