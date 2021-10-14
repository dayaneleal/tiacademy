import { alterarCesta} from './util.js'

window.onload = () => {
 
  
  (() => {
    const produtos = [
      { fruta: 'Mamão Papaia', preco: 3.33, selecionado:'false' },
      { fruta: 'Laranja', preco: 2.75, selecionado:'false' },
      { fruta: 'Manga', preco: 2.1, selecionado:'false' },
      { fruta: 'Melão', preco: 2.15, selecionado:'false' },
      { fruta: 'Melancia', preco: 1.1, selecionado:'false' }
    ];

    const listaProd = document.getElementById('produtos')

    for (let item of produtos) {
      const li = document.createElement('li')
      for (let frutas in item) {
        if (frutas == 'fruta') {
          listaProd.appendChild(li).textContent = item[frutas]
        }
        if (frutas == 'preco') {
          listaProd.appendChild(li).setAttribute('data-preco', item[frutas])
        }
        if (frutas == 'selecionado') {
          listaProd.appendChild(li).setAttribute('data-selecionado', item[frutas])
        }
      }
    }
  })()

  alterarCesta()
}
