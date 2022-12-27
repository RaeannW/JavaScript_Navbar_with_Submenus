
(function(){
'use strict';
let submenus = document.querySelectorAll('ul li ul');

function hideSubmenus() {
    for (let i = 0; i < submenus.length; i++) {
        submenus[i].className = 'hide-menu';
    }
}

hideSubmenus();

let menulink = document.querySelectorAll('.menulink');

for (let i = 0; i < menulink.length; i++) {
    menulink[i].addEventListener('click', function () {
        event.preventDefault();
        let thisMenu = this.parentNode.querySelector('ul');

        if (thisMenu.classList.contains('hide-menu')) {
            hideSubmenus();
            thisMenu.className = 'show-menu'
        } else {
            thisMenu.className = 'hide-menu';
        }
    });
}
})();