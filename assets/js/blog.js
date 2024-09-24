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
  


  document.addEventListener('DOMContentLoaded', function() {
    const instagramFeedContainer = document.getElementById('instagram-feed-content');

    // ID de tu hoja de Google y configuración
    const sheetID = '10e-1fLzNWcySdZYXyJnlpb-29Dx_HtfeC0_aid17PQ4';
    const socialMediaSheetName = 'SocialMedia';
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${socialMediaSheetName}`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        const jsonData = JSON.parse(data.substring(47).slice(0, -2));
        if (!jsonData.table || !jsonData.table.rows) throw new Error('Invalid data structure');

        const socialMediaPosts = jsonData.table.rows.slice(1)
          .map(row => row.c && row.c.length >= 3 ? {
            platform: row.c[0]?.v || '',
            title: row.c[1]?.v || '',
            link: row.c[2]?.v || ''
          } : null)
          .filter(post => post !== null);

        if (socialMediaPosts.length === 0) throw new Error('No valid posts found');

        const instagramPosts = socialMediaPosts.filter(post => post.platform.toLowerCase() === 'instagram');

        instagramPosts.forEach(post => {
          instagramFeedContainer.innerHTML += createInstagramEmbed(post.link);
        });
        if (instagramPosts.length > 0) loadInstagramScript();
      })
      .catch(error => {
        console.error('Error loading social media posts:', error);
        instagramFeedContainer.innerHTML = '<p>Error loading Instagram posts.</p>';
      });

    function createInstagramEmbed(link) {
      const postId = extractInstagramPostId(link);
      return `<div class="instagram-embed-container">
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/${postId}/" data-instgrm-version="14" style="width: 100%; max-width: 540px; margin: 1px;" data-instgrm-captioned data-instgrm-autoplay-disabled>
                  <a href="https://www.instagram.com/p/${postId}/" target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
                </blockquote>
              </div>`;
    }

    function extractInstagramPostId(url) {
      const match = url.match(/instagram\.com\/p\/([^/?]+)/);
      return match ? match[1] : '';
    }

    function loadInstagramScript() {
      if (!window.instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
            enforceInstagramPause();
          }
        };
      } else {
        window.instgrm.Embeds.process();
        enforceInstagramPause();
      }
    }

    function enforceInstagramPause() {
      const instagramIframes = document.querySelectorAll('iframe[src*="instagram.com"]');
      instagramIframes.forEach(iframe => {
        iframe.contentWindow.postMessage('{"method":"pause"}', '*');
      });
    }

    // Observador para detectar cuando se cargan nuevos embeds
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = mutation.addedNodes;
          for (let i = 0; i < addedNodes.length; i++) {
            const node = addedNodes[i];
            if (node.tagName === 'IFRAME' && node.src.includes('instagram.com')) {
              enforceInstagramPause();
            }
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Mantener los videos pausados incluso durante el scroll
    window.addEventListener('scroll', () => {
      enforceInstagramPause();
    });
});
