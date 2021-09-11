function fazGet(url){
    var request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(post){
    console.log(post)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");

    tdId.innerHTML = post.id;
    tdTitle.innerHTML = post.title;
    tdBody.innerHTML = post.body;

    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdBody);
    return linha
}

function main(){
    var data = fazGet("https://jsonplaceholder.typicode.com/posts");
    var post = JSON.parse(data);
    var tabela = document.getElementById("tabela");
    post.forEach(element => {
        var linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}

main()