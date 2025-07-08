document.getElementById("quizForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    resposta = document.querySelector('input[name="alternativa"]:checked');
    
    if(resposta.value == 'correto'){
        if(!localStorage.getItem("pontuacao")){
            localStorage.setItem("pontuacao",1)
        } else {
            localStorage.setItem("pontuacao", 
            parseInt((parseInt(localStorage.getItem("pontuacao")))+1))
        }
    }
    //se facil
    if(window.location.href.includes("facil")){
        paginaAtual = window.location.href.split("facil")[0].split("pergunta")[1]
        proxima = parseInt(paginaAtual)+1
        window.location.href = `pergunta${proxima}facil.html`
    } else {
        //se dificil
        paginaAtual = window.location.href.split("dificil")[0].split("pergunta")[1]
        proxima = parseInt(paginaAtual)+1
        window.location.href = `pergunta${proxima}dificil.html`
    }

        
        
}
// para demais
// localStorage.setItem("pontucao", 
// parseInt((localStorage.getItem("pontuacao"))+1))


// para primeira vez
// localStorage.setItem("pontuacao",1)