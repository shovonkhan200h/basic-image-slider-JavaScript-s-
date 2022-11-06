let photos=["img/1.jpg","img/2.jpg","img/3.jpg"];
let imgTag=document.querySelector("#imgTag");
let count=0;
function next(){
    count++
    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count]
        
    }
    else{
        imgTag.src=photos[count]
    }
}

function previous(){
    count--
    if(count<0){
        count=photos.length-1;
        imgTag.src=photos[count]
    }
    else{
        imgTag.src=photos[count]
    }
}