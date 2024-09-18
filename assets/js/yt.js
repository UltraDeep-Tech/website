const API_KEY = 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw'; // Reemplaza con tu clave de API
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg'; // Reemplaza con el ID de tu canal

// URL para obtener los videos del canal
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    let videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
      // Verifica si el resultado es un video (y no una lista de reproducción, etc.)
      if (video.id.kind === 'youtube#video') {
        let videoId = video.id.videoId;
        let videoTitle = video.snippet.title;

        // Crear un elemento para incrustar el video
        let videoElement = document.createElement('div');
        videoElement.classList.add('col-lg-6');
        videoElement.innerHTML = `
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="${videoTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        `;
        videoContainer.appendChild(videoElement);
      }
    });
  })
  .catch(error => console.log('Error fetching YouTube videos:', error));
