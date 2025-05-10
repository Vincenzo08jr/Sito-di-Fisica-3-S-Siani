// Funzione per caricare il menu in un elemento specifico
function loadMenu() {
    // Usa fetch per caricare il contenuto di menu.html
    fetch('menu.html')
        .then(response => response.text()) // Ottieni il contenuto come testo
        .then(data => {
            // Inserisci il contenuto nel punto desiderato
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Errore nel caricamento del menu:', error);
        });
}

// Chiama la funzione per caricare il menu una volta che la pagina è pronta
window.onload = loadMenu;
