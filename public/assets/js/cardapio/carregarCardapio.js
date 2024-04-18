import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { app } from "../firebase/firebaseConfig.js";
import { Cardapio } from "./Cardapio.js";

const db = getFirestore(app);

async function carregarCardapio(restauranteId){
    const restauranteSnapShot = await getDoc(doc(db, "restaurant", restauranteId));
    
    if(restauranteSnapShot.exists()){
        let cardapio = new Cardapio(restauranteSnapShot);
        
        cardapio.inserirCategorias();
        cardapio.inserirDescricao();
        cardapio.inserirItens();
        cardapio.trocarItensDeAcordoComACategoria();
        cardapio.trocarPagina();
    } else{
        console.log("No Such Document!");
    }
}

// Chamando a função e inserindo o layout defenido
const urlParams = new URLSearchParams(window.location.search)
const restauranteEscolhido = urlParams.get("nome");

if(restauranteEscolhido == null){
    window.location = 'index.html';
}

await carregarCardapio(restauranteEscolhido);
document.querySelector('head').innerHTML += `<link rel="stylesheet" href="assets/css/cardapio/cardapioLayouts/${urlParams.get("layout")}.css">`;