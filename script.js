let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    
    if (window.getComputedStyle(menu).right == "-210px") {
       
        menu.style.right = "0"
        
       
        iconeX.style.display = "inline"
        
      
        iconeBarras.style.display = "none"
        
        sombra.style.right = "0"
    } else {
        
        menu.style.right = "-210px"
        
       
        iconeX.style.display = "none"
        
        
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

