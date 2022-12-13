import { conectaApi } from "./conectaAPI.js"

//Isso que estamos fazendo são data attribute, que servem para individualizar esses elementos e conseguirmos manipular o DOM através deles. a estrutura padrão é um data, hífen e o nome que você quiser, eu botei data, hífen lista, só para ficar bem claro do que nós estamos tratando.
const lista = document.querySelector("[data-lista]")

export default function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li")
  video.className= "videos__item"
  video.innerHTML = `
  <iframe width="100%" height="72%" src="${url}"
  title="${titulo}" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  <div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
  </div>
  `
  return video
}

async function mostrarVideos() {
  try {
    const listaApi = await conectaApi.listaVideos()
    listaApi.map(item => 
      lista.appendChild(
        constroiCard(item.titulo, item.descricao, item.url, item.imagem)
      )
    )
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }
}

mostrarVideos()
