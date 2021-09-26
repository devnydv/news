let val;
let getstr = document.getElementById('snews').textContent;
let strtrim = getstr.trim();
let sub = strtrim.substr(0, 3);


if (sub === 'All') {
    val = 'all'
} else if (sub === 'Spo') {
    
    val = 'sports'
 } else if (sub === 'Ent') {
    
    val = 'entertainment'
    
} else if (sub === 'Sci') {

    val = 'science'
} else if (sub === 'Tec') {

    val = 'technology'
}


console.log(val)





function notvisi() {

    let btn = document.getElementById('ul');
    btn.classList.toggle('notvisi')

}




fetch("https://inshortsapi.vercel.app/news?category="+val)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (i = 0; i <= 23; i++) {


            let div = document.getElementById('news')
            let h = document.createElement('h1');
            let p2 = document.createElement('p');
            let img = document.createElement("img");
            //  let btn=document.createElement('button');
            let link = document.createElement('a');
            let ndiv = document.createElement('div');
            img.setAttribute("src", data.data[i].imageUrl);
            img.setAttribute("alt","img");
            h.setAttribute("class", "head")
            p2.setAttribute('class', 'para');
            ndiv.setAttribute('class', 'kid1')
            h.innerText = data.data[i].title;

            p2.innerText = data.data[i].content;

            link.setAttribute('href', data.data[i].url);

            // btn.innerText= 'Read more...'
            link.innerText = 'Read more...';
            div.appendChild(ndiv);
            document.getElementsByClassName("kid1")[i].appendChild(h)
            document.getElementsByClassName('kid1')[i].appendChild(img)
            document.getElementsByClassName('kid1')[i].appendChild(p2)
            //document.getElementsByClassName('kid')[i].appendChild(btn)
            document.getElementsByClassName('kid1')[i].appendChild(link)


            //let img= document.createElement('img')
            // img.setAttribute('src',pata.articles[i].urlToImage)

            //div.appendChild(p)
            //div.appendChild(img)
            console.log(data)
            

        }
        let load=document.getElementById("loading");
        load.remove();
    })
