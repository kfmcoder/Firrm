
////////  Side Drawer /////////

// Animated menu icon   //
function myFunction(x) {
    x.classList.toggle("change");
}
//////////////////////////


const drawerContainer = document.querySelector('.drawer-container');
const drawerToggle = document.querySelector('.drawer-toggle');

drawerToggle.addEventListener('click', () => {
    drawerContainer.classList.toggle('open');
});
