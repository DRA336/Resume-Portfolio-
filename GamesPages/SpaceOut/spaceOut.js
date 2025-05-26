document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = [
        { type: 'image', src: '/GamesPages/SpaceOut/Images/SOScreenshot_1.png' },
        { type: 'image', src: '/GamesPages/SpaceOut/Images/SOScreenshot_2.png' },
        { type: 'image', src: '/GamesPages/SpaceOut/Images/SOScreenshot_3.png' },
        { type: 'image', src: '/GamesPages/SpaceOut/Images/SOScreenshot_5.png' },
        { type: 'image', src: '/gamesPages/SpaceOut/Images/SOScreenshot_6.png' },
        { type: 'image', src: '/GamesPages/SpaceOut/Images/SOScreenshot_7.png' }
    ];

    let currentIndex = 0;
    let timer;
    const displayDuration = 4500; // 4.5 segundos para imagens

    const mainDisplay = document.querySelector('.main-media');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    function showMedia(index) {
        const item = mediaItems[index];

        if (item.type === 'image') {
            // Mostrar imagem na caixa vermelha
            mainDisplay.innerHTML = `<img src="${item.src}" alt="Imagem Principal">`;

            // Configurar temporizador para próxima troca
            clearTimeout(timer);
            timer = setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaItems.length;
                showMedia(currentIndex);
            }, displayDuration);

        } else if (item.type === 'video') {
            // Mostrar vídeo na caixa vermelha
            mainDisplay.innerHTML = item.src;

            // Não usar temporizador para vídeos - a troca será manual
            clearTimeout(timer);
        }

        // Atualizar miniaturas
        updateThumbnails();
    }

    function updateThumbnails() {
        thumbnailContainer.innerHTML = '';
        mediaItems.forEach((item, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => {
                currentIndex = index;
                showMedia(currentIndex);
            });

            if (item.type === 'image') {
                thumbnail.innerHTML = `<img src="${item.src}" alt="Miniatura">`;
            } else {
                thumbnail.innerHTML = `<div class="video-thumbnail"><i class="bi bi-play-circle-fill"></i> Vídeo</div>`;
            }

            if (index === currentIndex) {
                thumbnail.classList.add('active');
            }

            thumbnailContainer.appendChild(thumbnail);
        });
    }

    // Iniciar o sistema
    showMedia(0);
});