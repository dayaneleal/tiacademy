function resultadoCep(dadosCep) {
  for (let campo in dadosCep) {
    if (document.querySelector(`#${campo}`)) {
      document.querySelector(`#${campo}`).value = dadosCep[campo]
    }
  }
}

let dadosCep = async function (cep) {
  let url = `https:/viacep.com.br/ws/${cep}/json/`

  try {
    let dadosFetch = await fetch(url)
    let dadosJson = await dadosFetch.json()
    resultadoCep(dadosJson)
  } catch (e) {
    alert(e)
  }
}

let buscarCep = () => {
  const btnBuscar = document.getElementById('btn')
  const CEP = document.getElementById('cep')
  btnBuscar.addEventListener('click', function () {
    dadosCep(CEP.value)
  })
}

export { buscarCep }
