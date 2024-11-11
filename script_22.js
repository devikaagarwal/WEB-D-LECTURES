let inpBox=document.getElementById('inp');
let subButton=document.getElementById('btn');
let inpValue=inpBox.value;
let moviesDet=document.getElementById('movies');
subButton.addEventListener('click',()=>{
    let inpValue=inpBox.value;
    // console.log(inpValue);
    // console.log('button clicked');
    fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q='${inpValue}'`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        let movies=data;
        console.log(movies);
        movies.description.map((movie)=>{
            let imgUrl=movie.photo_url[1];
            console.log(imgUrl);
            let img=document.createElement('img');
            let title=document.createElement('h2');
            title.innerText=movie.title;
            img.src=imgUrl;
            img.classList.add('img');
            moviesDet.appendChild(img);
            moviesDet.appendChild(title);
        })
    })
})
