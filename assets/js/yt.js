// YouTube API configuration
const API_KEY = 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw';
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

const CACHE_KEY = 'youtube_videos_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hora en milisegundos

// Fetch and display YouTube videos
function getCachedVideos() {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const { timestamp, data } = JSON.parse(cachedData);
    const now = new Date().getTime();
    // Si los datos son recientes (dentro de 1 hora)
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
  }
  return null;
}

function saveVideosToCache(data) {
  const cacheData = {
    timestamp: new Date().getTime(),
    data
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
}

function fetchVideos() {
  const cachedVideos = getCachedVideos();
  let videoContainer = document.getElementById('video-container');

  if (cachedVideos) {
    console.log('Usando datos en caché');
    displayVideos(cachedVideos);
    return;
  }

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const videos = data.items;
      if (videos && videos.length > 0) {
        saveVideosToCache(videos); // Guardar en caché
        displayVideos(videos);
      } else {
        console.error("No videos found");
        videoContainer.innerHTML = '<p class="no-videos">No videos available at the moment.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching YouTube videos:', error);
      videoContainer.innerHTML = '<p class="error-message">Failed to load videos. Please try again later.</p>';
    });
}

function displayVideos(videos) {
  let videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = ''; // Limpiar contenedor antes de agregar videos

  videos.forEach((video, index) => {
    if (video.id.kind === 'youtube#video') {
      let videoId = video.id.videoId;
      let activeClass = index === 0 ? 'active' : '';
      let videoElement = `
        <div class="carousel-item ${activeClass}">
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      `;
      videoContainer.innerHTML += videoElement;
    }
  });

  // Initialize the Bootstrap carousel with slower transition
  $('#videoCarousel').carousel({
    interval: false // Disable auto-sliding
  });

  // Add custom CSS for slower transition
  const style = document.createElement('style');
  style.textContent = `
    .carousel-item {
      transition: transform 0.5s ease-in-out !important;
    }
  `;
  document.head.appendChild(style);
}

// Inicializar el proceso de obtención de videos
fetchVideos();
