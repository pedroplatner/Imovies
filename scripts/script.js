function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const containers = document.querySelectorAll('.container');

    // Alterar o background da banner corretamente
    banner.style.backgroundImage = `url('/imagens/movies/${bg}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Alternar visibilidade dos containers
    containers.forEach(container => {
        container.classList.remove('active');
        if (container.classList.contains(title)) {
            container.classList.add('active');
        }
    });
}
