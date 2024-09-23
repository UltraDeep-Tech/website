document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('linkedin-posts-menu');
    const feedContainer = document.getElementById('linkedin-feed');
  
    // ID de tu hoja de Google
    const sheetID = '10e-1fLzNWcySdZYXyJnlpb-29Dx_HtfeC0_aid17PQ4';
    const sheetName = 'Hoja1'; // Asegúrate de que este es el nombre correcto de tu hoja
  
    // URL de la API de Google Sheets
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
  
    fetch(url)
      .then(response => response.text())
      .then(data => {
        // Extraer el JSON de la respuesta
        const jsonData = JSON.parse(data.substring(47).slice(0, -2));
        const rows = jsonData.table.rows;
        
        const linkedInPosts = rows.slice(1).map(row => ({
          title: row.c[0].v,
          link: row.c[1].v
        }));
  
        // Crear menú
        linkedInPosts.forEach((post, index) => {
          const menuItem = document.createElement('div');
          menuItem.className = 'linkedin-post-title';
          menuItem.textContent = post.title;
          menuItem.addEventListener('click', () => showPost(index));
          menuContainer.appendChild(menuItem);
        });
  
        // Función para mostrar un post específico
        function showPost(index) {
          const post = linkedInPosts[index];
          const iframe = createLinkedInIframe(post.link);
          feedContainer.innerHTML = '';
          feedContainer.appendChild(iframe);
  
          // Actualizar clases activas en el menú
          const menuItems = menuContainer.getElementsByClassName('linkedin-post-title');
          Array.from(menuItems).forEach((item, i) => {
            item.classList.toggle('active', i === index);
          });
        }
  
        // Función para crear el iframe de LinkedIn
        function createLinkedInIframe(link) {
          const postId = extractLinkedInPostId(link);
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.linkedin.com/embed/feed/update/${postId}`;
          iframe.height = "580";
          iframe.width = "504";
          iframe.frameBorder = "0";
          iframe.allowFullscreen = true;
          iframe.title = "Embedded post";
  
          // Agregar manejador de errores
          iframe.onerror = function() {
            console.error('Error al cargar el post de LinkedIn');
            feedContainer.innerHTML = '<p>Error al cargar el post de LinkedIn. Por favor, verifica el enlace e intenta de nuevo.</p>';
          };
  
          return iframe;
        }
  
        // Función para extraer el ID del post de LinkedIn de la URL
        function extractLinkedInPostId(url) {
          // Intentar extraer el ID de diferentes formatos de URL
          const patterns = [
            /activity-(\d+)/,
            /linkedin\.com\/posts\/.*-(\d+)/,
            /linkedin\.com\/feed\/update\/urn:li:activity:(\d+)/
          ];
  
          for (let pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
              return `urn:li:activity:${match[1]}`;
            }
          }
  
          // Si no se encuentra ningún patrón conocido, intentar extraer el último segmento de la URL
          const urlParts = url.split(/[?#]/)[0].split('/');
          const lastPart = urlParts[urlParts.length - 1];
          
          if (lastPart && lastPart !== '') {
            return `urn:li:activity:${lastPart}`;
          }
  
          console.error('No se pudo extraer el ID del post de LinkedIn');
          return null;
        }
  
        // Mostrar el primer post por defecto
        if (linkedInPosts.length > 0) {
          showPost(0);
        }
      })
      .catch(error => {
        console.error('Error loading LinkedIn posts:', error);
        feedContainer.innerHTML = '<p>Error loading LinkedIn posts. Please try again later.</p>';
      });
  });
  
  // Mantener el código existente para videojs si es necesario
  var oldAddRemoteTextTrack = videojs.Player.prototype.addRemoteTextTrack;
  videojs.Player.prototype.addRemoteTextTrack = function(options, manualCleanup) {
    console.trace("addRemoteTextTrack called");
    return oldAddRemoteTextTrack.call(this, options, true);
  };