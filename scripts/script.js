let butaoGit = document.querySelectorAll('.button')[1]
let linkProjetos = document.querySelector("#linkMaisProjetos")
let imgTech = document.querySelector('#img-md')
let nomeInicial = document.querySelector('#hello')
let fullStak = document.querySelector('#type-dev')



linkProjetos.onclick = () =>{
    butaoGit.classList.add('aumentando')
}

let largura = screen.width
function imgApp(){
    if(largura < 768){
        imgTech.style.display = 'none'
        nomeInicial.classList.add('txt-center')
        fullStak.classList.add('txt-center')
    }
}
imgApp()


const target = document.querySelectorAll('.efe')
const animationClass = 'efect'

function animeScroll(){
    const windowTop = window.pageYOffset;
    target.forEach(function (element){
        if(windowTop + 350 >= element.offsetTop){
            element.classList.add('efect')
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll()
})