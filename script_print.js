document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('pdf-download-btn');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. Guardar el HTML original del botón
        const originalHTML = downloadBtn.innerHTML;
        
        // 2. Cambiar el texto del botón
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparando PDF...';
        downloadBtn.disabled = true;
        
        // 3. Crear un clon del contenido para imprimir
        const printContent = document.querySelector('.container').cloneNode(true);
        
        // 4. Aplicar estilos específicos para impresión
        printContent.style.width = '210mm';
        printContent.style.margin = '0 auto';
        printContent.style.padding = '15mm';
        printContent.style.fontSize = '12pt';
        
        // 5. Ocultar elementos no necesarios
        const elementsToHide = printContent.querySelectorAll('.theme-toggle, nav, .social-links, footer');
        elementsToHide.forEach(el => el.style.display = 'none');
        
        // 6. Crear una ventana de impresión
        const printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>CV Sulay Giraldo Gomez</title>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        line-height: 1.4;
                        color: #333;
                        background: white;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 210mm;
                        margin: 0 auto;
                        padding: 15mm;
                        box-sizing: border-box;
                    }
                    @page {
                        size: A4;
                        margin: 15mm;
                    }
                    .profile-section, .experience-card, .education-card {
                        page-break-inside: avoid;
                    }
                    h1 { font-size: 18pt; }
                    h2 { font-size: 16pt; }
                    h3 { font-size: 14pt; }
                    .profile-photo {
                        width: 80px;
                        height: 80px;
                    }
                </style>
            </head>
            <body>
                ${printContent.outerHTML}
                <script>
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 300);
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
        
        // 7. Restaurar el botón después de un tiempo
        setTimeout(() => {
            downloadBtn.innerHTML = originalHTML;
            downloadBtn.disabled = false;
        }, 2000);
    });
});