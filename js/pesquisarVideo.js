import { conectaApi } from "./conectaAPI.js"
import constroiCard from "./mostrarVideos.js"

async function pesquisarVideo(evento) {
  evento.preventDefault()
  const inputPesquisa = document.querySelector("[data-pesquisa]").value
  const busca = await conectaApi.buscaVideo(inputPesquisa)

  const listaPesquisada = document.querySelector("[data-lista]")
  
  //O que é que foi que fez essa função aqui? Ela faz assim, é um laço de repetição, o enquanto, ele vai fazer alguma coisa enquanto a condição que colocamos for verdadeira, a condição que eu botei foi o listaPesquisa.firstChild. Então enquanto aquela lista ter um primeiro filho, quer dizer que tem coisa lá dentro, enquanto isso for verdadeiro eu quero remover o primeiro filho da lista, aí ele fica nesse looping até eu apagar todos os filhos que a lista tem. Então vai ficar a lista vazia e depois em seguida, eu vou criar aquela lista de itens que eu quero pesquisar, só dos itens que estão de acordo com o termo que eu pesquisei.
  while (listaPesquisada.firstChild) {
    listaPesquisada.removeChild(listaPesquisada.firstChild)
  }

  busca.map(item => 
    listaPesquisada.appendChild(
      constroiCard(item.titulo, item.descricao, item.url, item.imagem)
    )
  )
  
  if (busca.length == 0) {
    listaPesquisada.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo!</h2>`
  }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
botaoPesquisa.addEventListener("click", evento => pesquisarVideo(evento))