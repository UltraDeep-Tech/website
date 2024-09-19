const API_KEY = 'AIzaSyCYoJ0hGQLahZkYGaJsbk9N2wyj14K80Jw';
const CHANNEL_ID = 'UCivpA1Q4U8Y09Kvp1_j5QRg';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

// Function to fetch videos and add them to Swiper
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    const videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
      if (video.id.kind === 'youtube#video') {
        let videoId = video.id.videoId;
        let videoTitle = video.snippet.title;

        // Create a Swiper slide with the video
        let videoSlide = document.createElement('div');
        videoSlide.classList.add('swiper-slide');
        videoSlide.innerHTML = `
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="${videoTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>${videoTitle}</p>
        `;
        videoContainer.appendChild(videoSlide);
      }
    });

    // Initialize Swiper after videos are loaded
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
  })
  .catch(error => console.error('Error fetching YouTube videos:', error));
