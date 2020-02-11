'use strict'
class DomElement {
    constructor(height, width, backgroundColor, fontSize) {
        this.selector = '#block'
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
const domElement = new DomElement('100px', '100px', 'blue', '24px');

console.log(domElement.makeNewElem());
