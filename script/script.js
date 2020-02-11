'use strict'
class DomElement {
    constructor(height, width, backgroundColor, fontSize) {
        this.selector = '.block'
        this.height = height;
        this.width = width;
        this.bg = backgroundColor;
        this.fontSize = fontSize;
    };
    
    makeNewElem() {
       if(this.selector[0] === '.'){
        let newDiv = document.createElement('div');
        newDiv.classList.add('block');
        document.body.appendChild(newDiv);
        newDiv.textContent = prompt("What?", "");
        newDiv.style.cssText = 'height: ' + this.height + '; \
        width: ' + this.width + '; \
        background-color: ' + this.bg + '; \
        font-size: ' + this.fontSize;
        } else if(this.selector[0] === '#'){
            let newP = document.createElement('p');
            document.body.appendChild(newP).id = 'best';
            newP.textContent = prompt("What?", "");
            newP.style.cssText = 'height: ' + this.height + '; \
            width: ' + this.width + '; \
            background-color: ' + this.bg + '; \
            font-size: ' + this.fontSize;
        };
    };
};
const domElement = new DomElement('100px', '100px', '#05dae6', '24px');
domElement.makeNewElem();

const squer = document.querySelector('.block');
let widthCl = document.documentElement.clientWidth;
let heightCl = document.documentElement.clientHeight;
squer.style.position = 'absolute';

squer.style.left = "45%";
squer.style.top = "45%";

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

let settingX = squer.offsetLeft;
let settingY = squer.offsetTop;
let settingSpeed = 50;
requestAnimationFrame(playGame);

function playGame() {
    if(keys.ArrowLeft && settingX > 0){
        settingX -= settingSpeed;
    }

    if(keys.ArrowRight && settingX < widthCl){
        settingX += settingSpeed;
    }

    if(keys.ArrowUp && settingY > 0){
        settingY -= settingSpeed;
    }

    if(keys.ArrowDown && settingY < heightCl){
        settingY += settingSpeed;
    }

    
    squer.style.left = settingX + 'px';
    squer.style.top = settingY + 'px';
    requestAnimationFrame(playGame);
/*     console.log(keys.ArrowDown);
console.log(settingX);
console.log(settingY); */
}
console.log(heightCl);
function startRun(event){
    event.preventDefault();
    if(keys.hasOwnProperty(event.key)){
    keys[event.key] = true;
    }
}

function stopRun(event){
    event.preventDefault();
    if(keys.hasOwnProperty(event.key)){
        keys[event.key] = false;
    }
}
