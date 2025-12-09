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




// script.js

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    const slides = Array.from(track.children);
    // O JS automaticamente pega 800px aqui, ajustando o movimento.
    const slideWidth = slides[0].getBoundingClientRect().width; 
    const totalSlides = slides.length;
    let currentSlideIndex = 0;

    // 1. Posiciona os slides
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // 2. Move a trilha
    const moveToSlide = (index) => {
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        
        const offset = slides[index].style.left;
        track.style.transform = `translateX(-${offset})`; 
        currentSlideIndex = index;
        updateDots();
    };

    // 3. Cria os Dots
    const generateDots = () => {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                moveToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
    };

    // 4. Atualiza a aparência dos Dots
    const updateDots = () => {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndex);
        });
    };
    
    // 5. Controles Manuais
    nextBtn.addEventListener('click', () => moveToSlide(currentSlideIndex + 1));
    prevBtn.addEventListener('click', () => moveToSlide(currentSlideIndex - 1));

    generateDots();
});