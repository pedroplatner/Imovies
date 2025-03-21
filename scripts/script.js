$(document).ready(function () {
    $('.carousel').carousel();

    const backgrounds = {
        'the-little-mermaid': 'url("../imagens/movies/bg-little-mermaid.jpg")',
        '65': 'url("../imagens/movies/bg-65.jpeg")',
        'the-covenant': 'url("../imagens/movies/bg-the-covenant.jpeg")',
        'the-black-demon': 'url("../imagens/movies/bg-the-black-demon.jpeg")',
        'the-tank': 'url("../imagens/movies/bg-the-tank.jpeg")'
    };

    const titles = {
        'the-little-mermaid': '../imagens/the-little-mermaid-title.png',
        '65': '../imagens/the-65-title.png',
        'the-covenant': '../imagens/the-covenant-title.png',
        'the-black-demon': '../imagens/the-black-demon-title.png',
        'the-tank': '../imagens/the-tank-title.png'
    };

    const durations = {
        'the-little-mermaid': '2h 15min',
        '65': '1h 33min',
        'the-covenant': '2h 3min',
        'the-black-demon': '1h 40min',
        'the-tank': '1h 40min'
    };

    const genres = {
        'the-little-mermaid': 'Animação, Fantasia',
        '65': 'Ficção Científica, Ação',
        'the-covenant': 'Ação, Drama',
        'the-black-demon': 'Terror, Suspense',
        'the-tank': 'Terror, Mistério'
    };

    $('.carousel-item').on('click', function () {
        const imgSrc = $(this).find('img').attr('src');
        const movieName = imgSrc.split('/').pop().split('.')[0];

        $('.banner').css({
            'background': backgrounds[movieName] || backgrounds['the-little-mermaid'],
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });

        $('.movie-titulo').attr('src', titles[movieName] || titles['the-little-mermaid']);

        $('.movie-duration').text(durations[movieName] || durations['the-little-mermaid']);

        $('.movie-genre').text(genres[movieName] || genres['the-little-mermaid']);
    });
});
