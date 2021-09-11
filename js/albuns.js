function fazGet(url){
    var request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(albuns){
    console.log(albuns)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");

    tdId.innerHTML = albuns.id;
    tdTitle.innerHTML = albuns.title;

    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    return linha
}

function main(){
    var data = fazGet("https://jsonplaceholder.typicode.com/albums");
    var albuns = JSON.parse(data);
    var tabela = document.getElementById("tabela");
    albuns.forEach(element => {
        var linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()