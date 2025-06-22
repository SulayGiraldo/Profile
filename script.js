document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Verificar preferencia del sistema o guardada
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplicar tema inicial
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Manejar clic en el botón
    themeToggle.addEventListener('click', function() {
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
});