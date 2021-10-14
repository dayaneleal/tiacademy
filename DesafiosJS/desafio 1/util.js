let alterarCesta = () => {
  let listagem = document.querySelectorAll('#produtos > li')
  let cestinha = document.getElementById('cestaDoCliente')
  
  for (let item of listagem) {  
    item.addEventListener('click', () => {

        if(item.dataset.selecionado == 'true')
        {
          alert('Produto na cesta')
        } else {
          let li = document.createElement('li')
          let valor = item.dataset.preco
          cestinha.appendChild(li).textContent = item.textContent
          cestinha.appendChild(li).setAttribute('data-preco', valor)
          item.dataset.selecionado = 'true'
        }
            
        calcularTotal()
        removerProduto()

    })
  }
}


let removerProduto = () => {
  const frutasRemover = document.querySelectorAll(`#cestaDoCliente > li`)
  let listagem = document.querySelectorAll('#produtos > li')
  for (let fruta of frutasRemover) 
  {
    for(let item of listagem) 
    {
      fruta.addEventListener('click', () => {
        fruta.remove()
        item.dataset.selecionado = 'false'
        calcularTotal()
      })
    }
  }
}


let calcularTotal = () => {
  let mostrarTotal = document.getElementById('mostraTotalCompra')
  let cesta = document.querySelectorAll('#cestaDoCliente > li')
  let total = 0

  for (let item of cesta) 
  {
    total += Number(item.dataset.preco)
  }
  mostrarTotal.value = `R$ ${total}`
}


export {alterarCesta}