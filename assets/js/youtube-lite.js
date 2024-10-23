class YoutubeLite {
  constructor(container, options = {}) {
      this.container = container;
      this.options = {
          apiKey: 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw',
          channelId: 'UCivpA1Q4U8Y09Kvp1_j5QRg',
          maxResults: options.maxResults || 5,
          cacheKey: 'youtube_videos_cache',
          cacheDuration: 60 * 60 * 1000 // 1 hora
      };
  }

  async init() {
      try {
          const videos = await this.getVideos();
          this.renderVideos(videos);
      } catch (error) {
          console.error('Error loading videos:', error);
          this.renderError();
      }
  }

  async getVideos() {
      // Intentar obtener del cache primero
      const cachedData = this.getCachedVideos();
      if (cachedData) return cachedData;

      // Si no hay cache, cargar de la API
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.options.apiKey}&channelId=${this.options.channelId}&part=snippet,id&order=date&maxResults=${this.options.maxResults}&type=video&videoDefinition=any`;

      try {
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error('API request failed');
          
          const data = await response.json();
          const videos = data.items.map(item => ({
              id: item.id.videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              description: item.snippet.description
          }));

          // Guardar en cache
          this.cacheVideos(videos);
          return videos;
      } catch (error) {
          throw new Error('Failed to fetch videos');
      }
  }

  getCachedVideos() {
      const cached = localStorage.getItem(this.options.cacheKey);
      if (!cached) return null;

      const { videos, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > this.options.cacheDuration) {
          localStorage.removeItem(this.options.cacheKey);
          return null;
      }

      return videos;
  }

  cacheVideos(videos) {
      const cacheData = {
          videos,
          timestamp: Date.now()
      };
      localStorage.setItem(this.options.cacheKey, JSON.stringify(cacheData));
  }

  renderVideos(videos) {
      // Crear el carrusel
      const carousel = document.createElement('div');
      carousel.className = 'carousel slide';
      carousel.setAttribute('data-bs-ride', 'carousel');
      carousel.id = 'videoCarousel';

      const carouselInner = document.createElement('div');
      carouselInner.className = 'carousel-inner';

      videos.forEach((video, index) => {
          const item = document.createElement('div');
          item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
          
          item.innerHTML = `
              <div class="video-preview" style="position: relative;">
                  <img 
                      src="${video.thumbnail}" 
                      alt="${video.title}"
                      class="d-block w-100 thumbnail" 
                      loading="lazy"
                      style="cursor: pointer;"
                      data-video-id="${video.id}"
                  >
                  <div class="play-button" style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 68px;
                      height: 48px;
                      background-color: rgba(0,0,0,0.7);
                      border-radius: 8px;
                      cursor: pointer;
                  ">
                      <div style="
                          border-style: solid;
                          border-width: 12px 0 12px 20px;
                          border-color: transparent transparent transparent white;
                          position: absolute;
                          top: 50%;
                          left: 55%;
                          transform: translate(-50%, -50%);
                      "></div>
                  </div>
                  <h5 class="mt-2 text-light">${video.title}</h5>
              </div>
          `;

          carouselInner.appendChild(item);
      });

      carousel.appendChild(carouselInner);

      // Agregar controles del carrusel
      carousel.innerHTML += `
          <button class="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      `;

      this.container.innerHTML = '';
      this.container.appendChild(carousel);

      // Agregar event listeners para cargar videos
      this.container.querySelectorAll('.video-preview').forEach(preview => {
          preview.addEventListener('click', (e) => {
              const videoId = e.currentTarget.querySelector('img').dataset.videoId;
              this.loadVideo(videoId, preview);
          });
      });
  }

  loadVideo(videoId, container) {
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '315';
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.title = 'YouTube video player';
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      container.innerHTML = '';
      container.appendChild(iframe);
  }

  renderError() {
      this.container.innerHTML = `
          <div class="alert alert-danger" role="alert">
              Unable to load videos. Please try again later.
          </div>
      `;
  }
}