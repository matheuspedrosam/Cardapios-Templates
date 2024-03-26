import { cardapio } from "./dadosMockados.js";

const main = document.querySelector("main")
main.innerHTML = "";

let classe = "";

cardapio.forEach((prato, index) => {

    if(prato.categoria == "Bebida"){
        classe = "imgs-container drinks"
    } else{
        classe = "imgs-container"
    }
    
    if(index == 0){
        main.innerHTML = `
            <div id="descricao-restaurante" class="descs-container">
                <h1>Danny's Bistro</h1>
                <h3>Hungry? No Problem!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci dicta nobis, minus et illum ratione officia enim architecto neque ut aperiam praesentium iste esse nemo quaerat ad. Repudiandae, laborum?</p>
    
                <p class="contacts">Email: D@gmail.com</p>
                <p class="contacts">Tel: (82) 99999-9999</p>
                <p class="contacts">Instagram: @Danny's</p>
            </div>
    
            <div id="item-1" class="itens">
                <div class="${classe}">
                    <div class="precos-containers">
                        <div class="precos"><span>R$ ${prato.preco}</span></div>
                    </div>
                    <div class="descs-container">
                        <h3>${prato.nome} (${prato.categoria})</h3>
                        <p>${prato.descricao}</p>
                    </div>
                </div>
            </div>
        `
    } else {
        main.innerHTML += `
            <div class="itens">
                <div class="${classe}">
                    <div class="precos-containers">
                        <div class="precos"><span>R$ ${prato.preco}</span></div>
                    </div>
                </div>
                
                <div class="descs-container">
                    <h3>${prato.nome} (${prato.categoria})</h3>
                    <p>${prato.descricao}</p>
                </div>
            </div>
        `
    }
})