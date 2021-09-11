function fazGet(url){
    var request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(post){
    console.log(post)
    elemento_pai = document.body;
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");
    tdComplete = document.createElement("td");

    tdId.innerHTML = post.id;
    tdTitle.innerHTML = post.title;
    tdComplete.innerHTML = post.completed;

    document.body.appendChild(linha);
    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdComplete);
    return linha
}

function main(){
    var data = fazGet("https://jsonplaceholder.typicode.com/todos");
    var post = JSON.parse(data);
    var tabela = document.getElementById("tabela");
    post.forEach(element => {
        var linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()