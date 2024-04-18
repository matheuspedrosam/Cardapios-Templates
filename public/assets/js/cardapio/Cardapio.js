import { gerarItemParaOCardapio } from "./functions/gerarItemParaOCardapio.js";

export class Cardapio{
    cardapio;
    categorias;

    nomeRestaurante;
    descricaoRestaurante;
    contatosRestaurante;

    main_DOM;
    headerNavUL_DOM;
    footerNavUL_DOM;

    constructor(dadosRestaurante){
        const dadosCardapio = dadosRestaurante.data().menu;

        // Tratando as categorias:
        const dadosCategoriasComDuplicatas = [];
        dadosRestaurante.data().menu.forEach((menu) => {
            dadosCategoriasComDuplicatas.push(menu.categoria)
        });
        const dadosCategorias = dadosCategoriasComDuplicatas.filter((categorias, i) => {
            return dadosCategoriasComDuplicatas.indexOf(categorias) === i;
        })

        this.cardapio = dadosCardapio;
        this.categorias = dadosCategorias;

        this.nomeRestaurante = dadosRestaurante.data().nome;
        this.descricaoRestaurante = dadosRestaurante.data().descricao;
        this.contatosRestaurante = dadosRestaurante.data().contatos;

        this.main_DOM = document.querySelector("main");
        this.headerNavUL_DOM = document.querySelector("header nav ul");
        this.footerNavUL_DOM = document.querySelector("footer nav ul");
    }

    inserirCategorias(){
        let totalCategorias = 0;
        let classe;
        for (let categoria of this.categorias){
            totalCategorias == 0 ? classe = "selected" : classe = "";

            this.headerNavUL_DOM.innerHTML += `<li class="${classe}">${categoria}</li>`
            
            totalCategorias += 1;
        }

        this.headerNavUL_DOM.style.gridTemplateColumns = `repeat(${totalCategorias}, 1fr)`
    }

    inserirDescricao(){
        this.main_DOM.innerHTML = `
            <div id="descricao-restaurante" class="descs-container">
                <h1>${this.nomeRestaurante}</h1>
                <h3>Hungry? No Problem!</h3>
                <p>${this.descricaoRestaurante}</p>

                <p class="contacts">Email: ${this.contatosRestaurante.email}</p>
                <p class="contacts">Tel: ${this.contatosRestaurante.tel}</p>
                <p class="contacts">Instagram: ${this.contatosRestaurante.instagram}</p>
            </div>
        `
    }
    
    inserirItens(categoriaSelecionada = this.categorias[0]){
        if(!this.footerNavUL_DOM.children[1].classList.contains("selected")){
            for (let numeroPagina of this.footerNavUL_DOM.children){
                numeroPagina.classList.remove("selected");
            }
            this.footerNavUL_DOM.children[1].classList.add("selected");
        }
        
        let i = 0;
        this.cardapio.forEach((item) => {
            if(item.categoria == categoriaSelecionada){
                if(i == 0){ 
                    this.main_DOM.innerHTML += gerarItemParaOCardapio(item, true);
                    i += 1;
                } else{
                    this.main_DOM.innerHTML += gerarItemParaOCardapio(item, false);
                }
            }
        })
    }
    
    trocarItensDeAcordoComACategoria(){  
        this.headerNavUL_DOM.addEventListener("click", ({target:elementoClickado}) => {
            if(elementoClickado.classList.contains("selected")) return;

            let itensJaAdicionados = document.querySelectorAll(".itens");

            if(itensJaAdicionados != []){
                for (let itemJaAdicionado of itensJaAdicionados){
                    this.main_DOM.removeChild(itemJaAdicionado);
                }
            }
            
            for (let categoria of this.headerNavUL_DOM.children){
                categoria.classList.remove("selected");
            }
            
            elementoClickado.classList.add("selected");
            this.inserirItens(elementoClickado.innerText);
        })
    }
    
    trocarPagina(){
        this.footerNavUL_DOM.addEventListener("click", ({target:elementoClickado}) => {

            if(elementoClickado.id != "btn-anterior" && elementoClickado.id != "btn-proxima"){
                if(elementoClickado.classList.contains("selected")) return;
    
                for (let pagina of this.footerNavUL_DOM.children){
                    pagina.classList.remove("selected");
                }
    
                elementoClickado.classList.add("selected");
            } else {                
                if(elementoClickado.id == "btn-proxima"){
                    this.avancarOuRetrocederPagina(elementoClickado, "Avançar");
                } else if(elementoClickado.id == "btn-anterior"){
                    this.avancarOuRetrocederPagina(elementoClickado, "Retroceder");
                }
            }

        })
    }

    avancarOuRetrocederPagina(elementoClickado, sentido){
        const footerNavUL = [...elementoClickado.parentNode.children]
        footerNavUL.shift();
        footerNavUL.pop();
        
        for (let numeroPagina of footerNavUL){
            if(numeroPagina.classList.contains("selected")){
                if(sentido == "Avançar"){
    
                    if (footerNavUL.indexOf(numeroPagina) == footerNavUL.length - 1) return;
                    footerNavUL[footerNavUL.indexOf(numeroPagina) + 1].classList.add("selected");
                    numeroPagina.classList.remove("selected");
                    
                } else if(sentido == "Retroceder"){
                    
                    if (footerNavUL.indexOf(numeroPagina) == 0) return;
                    footerNavUL[footerNavUL.indexOf(numeroPagina) - 1].classList.add("selected");
                    numeroPagina.classList.remove("selected");
    
                }
    
                return;
            }
        }
    }
}