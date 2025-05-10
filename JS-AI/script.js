// Funzione per filtrare il menu in base alla ricerca
document.getElementById('search').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase(); // Ottieni il termine di ricerca (minuscolo)
    var menuItems = document.querySelectorAll('.menu-box a'); // Seleziona tutte le voci del menu

    menuItems.forEach(function(item) {
        var itemText = item.textContent.toLowerCase(); // Ottieni il testo della voce del menu in minuscolo
        if (itemText.indexOf(searchTerm) === -1) {
            item.style.display = 'none'; // Nascondi la voce se il testo non corrisponde al termine di ricerca
        } else {
            item.style.display = 'block'; // Mostra la voce se il testo corrisponde
        }
    });
});
