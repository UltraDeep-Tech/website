const API_KEY = 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw';
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    let videoContainer = document.getElementById('video-container');
    
    videos.forEach(video => {
      if (video.id.kind === 'youtube#video') {
        let videoId = video.id.videoId;
        let videoTitle = video.snippet.title;

        let slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
          <div class="video-thumbnail">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" title="${videoTitle}" frameborder="0" allowfullscreen></iframe>
            <p>${videoTitle}</p>
          </div>
        `;
        videoContainer.appendChild(slide);
      }
    });

    // Initialize Swiper.js after dynamic content is added
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
  .catch(error => console.log('Error fetching YouTube videos:', error));
