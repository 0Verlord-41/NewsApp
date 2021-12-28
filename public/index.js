function start(){

    let xhr = new XMLHttpRequest();
    
    xhr.open( 'GET', `/api?q=general`, true );
    
    xhr.onload = function(){
        if(this.status == 200){
    
            let obj = JSON.parse(this.responseText);
            let articles = obj.articles;
    
            let news = "";
    
            let newsCard = document.getElementById("newsBox");
            articles.forEach( function(element) {
                let string = `<div class="col-md-4 col-lg-3">
                                <div class="card " style="width: 100%; margin-bottom: 20px;">
                                    <img src="${element["urlToImage"]}" class="card-img-top p-1" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${element["title"]}</h5>
                                        <p class="card-text d-none d-sm-block">${element["content"]}</p>
                                        <a href="${element["url"]}" target="_blank" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>    
                            </div>`
                news += string;
            });
            newsCard.innerHTML = news;
        }
        else{
            console.log('Not working');
        }
    }
    xhr.send();
}

start();

let que = ['general', 'entertainment', 'business','science', 'sports', 'technology', 'anime'];
let q;
let v = document.querySelectorAll('li[data-id=ti]');
for(let i=0; i<v.length; i++){
    v[i].addEventListener('click', ()=>{
        q = que[i];
        getResults();
    });
}

function getResults(){
    let xhr = new XMLHttpRequest();
    
    xhr.open( 'GET', `/api?q=${q}`, true );
    
    xhr.onload = function(){
        if(this.status == 200){
    
            let obj = JSON.parse(this.responseText);
            let articles = obj.articles;
    
            let news = "";
    
            let newsCard = document.getElementById("newsBox");
            articles.forEach( function(element) {
                let string = `<div class="col-md-4 col-lg-3">
                                <div class="card " style="width: 100%; margin-bottom: 20px;">
                                    <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${element["title"]}</h5>
                                        <p class="card-text d-none d-sm-block">${element["content"]}</p>
                                        <a href="${element["url"]}" target="_blank" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>`
                news += string;
            });
            newsCard.innerHTML = news;
        }
        else{
            console.log('Not working');
        }
    }
    xhr.send();
}