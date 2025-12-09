let menu = document.getElementById("inicio")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(inicio).right == "-210px") {
        //Abrir menu
        menu.style.right = "1000px"
        
        //Mostrar icone x
        iconeX.style.display = "inline"
        
        //Esconder icone barras 
        iconeBarras.style.display = "none"
        
        sombra.style.right = "10000px"
    } else {
        //Fechar o menu
        menu.style.right = "-210px"
        
        // Esconder icone X
        iconeX.style.display = "none"
        
        // Mostrar icone barras
        iconeBarras.style.display = "inline"
        
        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        // Mostrar icone X
        iconeX.style.display = "inline"
    }
    else{
        // Esconder icone barras
        iconeBarras.style.display = "none"
    }
}


//Filtro dos Livros
const filtro_btn = document.querySelectorAll('.filter_btn')
const card_livros = document.querySelectorAll('.card_livro')

filtro_btn.forEach(button => {
    button.addEventListener('click', () => {
        filtro_btn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filtro = button.getAttribute('data-filter');

        card_livros.forEach(card => {
            if (filtro === 'all' || card.getAttribute('data-category') === filtro){
                card.style.display = 'block';
            }else{
                card.style.display = 'none';
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // 1. Captura os elementos necessários
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Pega todos os slides
    const slides = Array.from(track.children);
    // Calcula a largura de um único slide
    const slideWidth = slides[0].getBoundingClientRect().width;
    // Define o índice do slide atual
    let currentSlideIndex = 0;

    // 2. Função para mover a trilha para o slide correto
    const moveToSlide = (track, currentSlide, targetSlide) => {
        // Calcula o quanto a trilha deve ser movida (em pixels)
        const amountToMove = targetSlide.style.left;
        
        // Aplica a transformação CSS para deslizar
        track.style.transform = `translateX(-${targetSlide.style.left})`; 
        
        currentSlideIndex = slides.indexOf(targetSlide);
    };
    
    // 3. Posiciona todos os slides horizontalmente
    // O objetivo é fazer o Slide 1 começar em 0px, Slide 2 em 400px, Slide 3 em 800px, etc.
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // 4. Lógica do botão 'Próximo'
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            const nextIndex = currentSlideIndex + 1;
            const nextSlide = slides[nextIndex];
            moveToSlide(track, slides[currentSlideIndex], nextSlide);
        } else {
            // Volta para o primeiro slide (loop)
            moveToSlide(track, slides[currentSlideIndex], slides[0]);
        }
    });

    // 5. Lógica do botão 'Anterior'
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            const prevIndex = currentSlideIndex - 1;
            const prevSlide = slides[prevIndex];
            moveToSlide(track, slides[currentSlideIndex], prevSlide);
        } else {
            // Vai para o último slide (loop)
            const lastIndex = slides.length - 1;
            moveToSlide(track, slides[currentSlideIndex], slides[lastIndex]);
        }
    });
});