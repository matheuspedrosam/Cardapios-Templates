export function gerarItemParaOCardapio(item, primeiroItem){
    if(primeiroItem){
        return `
            <div class="itens">
                <div class="imgs-container">
                    <div class="precos-containers">
                        <div class="precos"><span>R$ ${item.preco}</span></div>
                    </div>
                    <div class="descs-container">
                        <h3>${item.nome} (${item.categoria})</h3>
                        <p>${item.descricao}</p>
                    </div>
                </div>
            </div>
        `
    } else {
        return `
            <div class="itens">
                <div class="imgs-container">
                    <div class="precos-containers">
                        <div class="precos"><span>R$ ${item.preco}</span></div>
                    </div>
                </div>
            
                <div class="descs-container">
                    <h3>${item.nome} (${item.categoria})</h3>
                    <p>${item.descricao}</p>
                </div>
            </div>
        `
    }
}