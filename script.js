let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto });

    // Atualiza o contador do carrinho
    atualizarCarrinho();

    // Exibe o total
    total += precoProduto;
    document.getElementById("total").innerText = total.toFixed(2);

    // Exibe os itens no carrinho
    atualizarItensCarrinho();
}

function atualizarCarrinho() {
    const cartCount = document.getElementById("cartCount");
    cartCount.innerText = carrinho.length;
    
    // Abre ou fecha o carrinho dependendo do número de itens
    const carrinhoElement = document.getElementById("carrinho");
    if (carrinho.length > 0) {
        carrinhoElement.classList.remove("carrinho-fechado");
        carrinhoElement.classList.add("carrinho-aberto");
    } else {
        carrinhoElement.classList.remove("carrinho-aberto");
        carrinhoElement.classList.add("carrinho-fechado");
    }
}

function atualizarItensCarrinho() {
    const itensCarrinho = document.getElementById("itensCarrinho");
    itensCarrinho.innerHTML = ''; // Limpa os itens do carrinho

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });
}

function toggleCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");
    if (carrinhoElement.classList.contains("carrinho-fechado")) {
        carrinhoElement.classList.remove("carrinho-fechado");
        carrinhoElement.classList.add("carrinho-aberto");
    } else {
        carrinhoElement.classList.remove("carrinho-aberto");
        carrinhoElement.classList.add("carrinho-fechado");
    }
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    const pedido = carrinho.map(item => `${item.nome} - R$${item.preco.toFixed(2)}`).join('\n');
    const mensagem = `Olá, gostaria de fazer um pedido:\n\n${pedido}\n\nTotal: R$${total.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, "_blank");
}
