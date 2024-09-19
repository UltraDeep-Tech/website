const API_KEY = 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw';
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

// Función para obtener los videos y agregar al Swiper
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    const videoContainer = document.getElementById('video-container');

    if (videos && videos.length > 0) {
      videos.forEach(video => {
        if (video.id.kind === 'youtube#video') {
          let videoId = video.id.videoId;

          // Crear un slide del Swiper con el video
          let videoSlide = document.createElement('div');
          videoSlide.classList.add('swiper-slide');
          videoSlide.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `;
          videoContainer.appendChild(videoSlide);
        }
      });

      // Inicializar Swiper después de cargar los videos
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      console.error('No videos found.');
    }
  })
  .catch(error => console.error('Error fetching YouTube videos:', error));
