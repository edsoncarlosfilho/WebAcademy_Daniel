window.onload = () => {

    let botoes = document.querySelectorAll("button.excluir");
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.remove();
        });
    });

    let alertas = document.querySelectorAll("div.alerta span");
    // console.log(alertas)
    alertas.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.style.display = "none";
        });
    });

    let botaoCarregar = document.querySelector("button#load");
    let tabela =document.querySelector("table");
    let xhr = new XMLHttpRequest();
    if (botaoCarregar) {
        botaoCarregar.addEventListener("click",() => {
            // console.log("passei aqui")
            let url = "https://raw.githubusercontent.com/danielnsilva/webacademyufac/main/usuarios.json"
            xhr.open("GET", url);
            xhr.addEventListener("readystatechange", ()=> {
                if (xhr.readyState ==4 && xhr.status ==200) {
                    // console.log(xhr.responseText);
                    let dados = JSON.parse(xhr.responseText);
                    for (let item in dados) {
                        let linha = document.createElement("tr");
                        let id = document.createElement("td");
                        let nome = document.createElement("td");
                        let usuario = document.createElement("td");
                        let ativo = document.createElement("td");
                        let papel = document.createElement("td");
                        let acoes = document.createElement("td");
                        id.classList.add("fit");
                        id.textContent = dados[item].id;
                        nome.textContent = dados[item].nome;
                        usuario.textContent = dados[item].usuario;
                        ativo.textContent = dados[item].ativo;
                        papel.textContent = dados[item].papel;
                        acoes.innerHTML = "<button type='button'>Editar</button>"+
                                          "<button type='button' class='excluir>Excluir</button>"
                        linha.appendChild(id);
                        linha.appendChild(nome);
                        linha.appendChild(usuario);
                        linha.appendChild(ativo);
                        linha.appendChild(papel);
                        linha.appendChild(acoes);
                        tabela.tBodies[0].appendChild(linha);
                

                    }
                }
            });

            xhr.send();
        })
    }
}
