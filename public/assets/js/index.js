import { getFirestore } from "firebase-admin";

import { Cardapio } from "./cardapio/Cardapio.js";

const db = getFirestore();

async function imprimirEstruturaRestaurantes() {
  try {
    const restaurantesSnapshot = await getDocs(collection(db, "restaurant"));
    restaurantesSnapshot.forEach(doc => {
      console.log("ID do restaurante:", doc.id);
      console.log("Detalhes do restaurante:", doc.data());
    });
  } catch (error) {
    console.error("Erro ao imprimir a estrutura dos restaurantes:", error);
  }
}

imprimirEstruturaRestaurantes();

// let cardapio = new Cardapio(dadosCardapio, dadosCategorias, dadosRestaurante);

// cardapio.inserirCategorias();
// cardapio.inserirDescricao();
// cardapio.inserirItens();
// cardapio.trocarItensDeAcordoComACategoria();
// cardapio.trocarPagina();