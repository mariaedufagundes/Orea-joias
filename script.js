let menu = document.getElementById("inicio")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(inicio).right == "-210px") {
        //Abrir menu
        menu.style.right = "1700px"
        
        //Mostrar icone x
        iconeX.style.display = "inline"
        
        //Esconder icone barras 
        iconeBarras.style.display = "none"
        
        sombra.style.right = "1100px"
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



