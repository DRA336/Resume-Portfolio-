document.addEventListener('DOMContentLoaded', function () {
    const mediaItems = [
        { type: 'image', src: 'Images/SOScreenshot_1.png' },
        { type: 'image', src: 'Images/SOScreenshot_2.png' },
        { type: 'image', src: 'Images/SOScreenshot_3.png' },
        { type: 'image', src: 'Images/SOScreenshot_5.png' },
        { type: 'image', src: 'Images/SOScreenshot_6.png' },
        { type: 'image', src: 'Images/SOScreenshot_7.png' }
    ];

    let currentIndex = 0;
    let timer;
    const displayDuration = 4500;

    const mainDisplay = document.querySelector('.main-media');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    function showMedia(index) {
        const item = mediaItems[index];

        if (item.type === 'image') {
            mainDisplay.innerHTML = `<img src="${item.src}" alt="Imagem Principal">`;
            clearTimeout(timer);
            timer = setTimeout(() => {
                currentIndex = (currentIndex + 1) % mediaItems.length;
                showMedia(currentIndex);
            }, displayDuration);
        }

        updateThumbnails();
    }

    function updateThumbnails() {
        thumbnailContainer.innerHTML = '';
        mediaItems.forEach((item, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            if (index === currentIndex) thumbnail.classList.add('active');
            thumbnail.innerHTML = `<img src="${item.src}" alt="Miniatura">`;
            thumbnail.addEventListener('click', () => {
                currentIndex = index;
                showMedia(index);
            });
            thumbnailContainer.appendChild(thumbnail);
        });
    }

    showMedia(0);
});
