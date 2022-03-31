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
                    console.log(xhr.responseText);
                }
            });
            xhr.send();
        })
    }
}
