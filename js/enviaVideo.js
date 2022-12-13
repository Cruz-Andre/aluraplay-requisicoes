import { conectaApi } from "./conectaAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function enviaVideo(evento) {
  evento.preventDefault()

  const url = document.querySelector("[data-url]").value
  const titulo = document.querySelector("[data-titulo]").value
  const imagem = document.querySelector("[data-imagem]").value
  const descricao = Math.floor(Math.random() * 10).toString()
  
  try {
    // atenção na ordem de passar os parametros!
    await conectaApi.criaVideo(titulo, descricao, url, imagem)

    window.location.href = "../pages/envio-concluido.html"
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener("submit", evento => enviaVideo(evento))