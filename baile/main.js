let e = "off";
const d = document
let bntSonido = new  Audio ('./sound/baila.mp3');
let btnAudio = new Audio ('./sound/audi.mp3');


let btn = d.querySelector('.eOA');
let quieto = d.querySelector('#quieto');



let bailar = ()=>{
    if(e === "off"){
        e = "on";
        quieto.classList.add('on')
        console.log(e)
        quieto.addEventListener('click', ()=>{
            bntSonido.play();
        });
        quieto.addEventListener('click', ()=>{
            btnAudio.play();
        });

    }else{
        e = "off"
        quieto.classList.remove('on')
        console.log(e)
        quieto.addEventListener('click', ()=>{
            btnAudio.pause();
        });
    }

}

btn.addEventListener('click', bailar);