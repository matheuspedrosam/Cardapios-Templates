import { getFirestore, collection, getDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { app } from "../firebase/firebaseConfig.js";

const RestaurantesLista = document.querySelector("#lista-container ul")

const db = getFirestore(app);

const restaurantesSnapShot = await getDocs(collection(db, "restaurant"));

restaurantesSnapShot.forEach((restaurante) => {
    RestaurantesLista.innerHTML += `
        <li>
            <a href="cardapio.html?nome=${restaurante.id}&layout=${restaurante.data().layout}">
                <div class="li-img-e-descricao-container">
                    <img src="assets/imgs/images_garuva_ex.jpg" alt="">
                    <h2>${restaurante.data().nome}</h2>
                    <p>${restaurante.data().descricao}</p>
                </div>
            </a>
        </li>
    `
})