var search_open = document.getElementById("search_open");
var search = document.getElementById("search");
search_open.onclick = function(){
    if (search.classList.contains("open")) {
        // La clase 'open' está presente, la quitamos
        search.classList.remove("open");
    } else {
        // La clase 'open' no está presente, la agregamos
        search.classList.add("open");
    }
}