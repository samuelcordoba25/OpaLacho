document.addEventListener("DOMContentLoaded", function() {
    // --- LÓGICA DEL NAVBAR ---
    const navbarHTML = `
    <nav class="navbar">
        <ul class="menu">
            <img src="static/img/logogrande.png" alt="Logo">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="#">NOSOTROS</a></li>
            <li><a href="tienda.html">TIENDA</a></li>
            <li><a href="#">CONTACTOS</a></li>
        </ul>
    </nav>
    `;
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

    // --- LÓGICA DEL FOOTER ---
    const footerHTML = `
    <footer class="footer">
        <div class="container-footer">
            <div class="menu-footer">
                <p class="title-footer">Opalacho</p>
                <p>Contacto:</p>
                <p>Bogotá, Colombia</p>
            </div>
        </div>
    </footer>
    `;
    
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});