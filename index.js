const length_of_buttons=document.querySelectorAll(".drum").length;
for(let i=0;i<length_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let content=this.innerHTML;
        makesound(content);
        animation(content);
    })
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
})

function makesound(key){
    switch (key) {
        case 'w':
            let crash=new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            let kickbass=new Audio("/sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case 's':
            let snare=new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            let tom1=new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            let tom2=new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            let tom3=new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            let tom4=new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

function animation(currentkey){
    let activekey=document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);
}
