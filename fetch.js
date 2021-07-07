function init(){
    if(window.location.hash){
        console.log("hash exist");
        loadfile(window.location.hash.substr(2));
      } 
      else {
        loadfile('welcome');
      }
  
      fetch('list').then(function(response){
      response.text().then(function(text){
        // document.querySelector('#nav').innerHTML = text;
        var items = text.split(',');
        var i = 0;
        var tags = '';
        while(i<items.length){
          var item = items[i];
          item = item.trim();
          var tag = '<li><a href="#!'+item+'" onclick="loadfile(\''+item+'\')">'+item+'</a></li>';
          tags = tags + tag;
          i = i + 1;
        }
        document.querySelector('#nav').innerHTML = tags;
      })
    });
}

function loadfile(file){
    fetch(file).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    })
}
