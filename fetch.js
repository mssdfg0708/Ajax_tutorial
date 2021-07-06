function loadfile(file){
    fetch(file).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    })
}
