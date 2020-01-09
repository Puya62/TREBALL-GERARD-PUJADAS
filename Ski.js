function menuResponsive() {
    var menu=document.getElementById("desplegable");
    if (menu.style.display=="flex") {
        menu.style.display="none";
    } else {
        menu.style.display="flex";
    }
}