
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


//// TABS ////
function openTab(evt, tabName) {
    // Hide all tab content
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all buttons
    let tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show current tab and activate button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}