<template>
		<section id="comofunciona">
	<div class="how-it-works-section">
	  <h2>¿Cómo funciona?</h2>
	  <p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the lorem
	  </p>
	  <div class="video-placeholder" @click="showVideo">
		<div class="play-button">
		  <i class="fa fa-play"></i>
		</div>
	  </div>
  
	  <!-- Modal para el video -->
	  <div v-if="isVideoVisible" class="video-modal" @click="hideVideo">
		<div class="video-content" @click.stop>
		  <iframe
			width="100%"
			height="100%"
			:src="videoUrl"
			title="Video"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		  ></iframe>
		  <button class="close-button" @click="hideVideo">X</button>
		</div>
	  </div>
	</div>
	</section>
  </template>
  
  <script>
  export default {
	name: "HowItWorks",
	data() {
	  return {
		isVideoVisible: false,
		videoUrl: "https://www.youtube.com/embed/VIDEO_ID?autoplay=1",
	  };
	},
	methods: {
	  showVideo() {
		this.isVideoVisible = true;
	  },
	  hideVideo() {
		this.isVideoVisible = false;
	  },
	},
  };
  </script>
  
  <style scoped>
  
  
  .how-it-works-section h2 {
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 10px;
  }
  
  .how-it-works-section p {
	color: #fff;
	font-size: 1rem;
	max-width: 600px;
	margin: 0 auto 20px;
  }
  
  .video-placeholder {
	width: 100%;
	max-width: 600px;
	aspect-ratio: 16/9;
	background-color: #fff;
	border-radius: 8px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: box-shadow 0.3s ease;
  }
  
  .video-placeholder:hover {
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  
  .play-button {
	width: 60px;
	height: 60px;
	background-color: #00b894;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .play-button:hover {
	transform: scale(1.2);
	background-color: #55efc4;
  }
  
  .play-button i {
	color: #fff;
	font-size: 24px;
  }
  
  .video-modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
  }
  
  .video-content {
	position: relative;
	width: 90%;
	max-width: 800px;
	aspect-ratio: 16/9;
  }
  
  .close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: #ff4757;
	color: #fff;
	border: none;
	border-radius: 50%;
	font-size: 1.2rem;
	cursor: pointer;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease;
  }
  
  .close-button:hover {
	background-color: #e84118;
  }
  
  /* Media queries para dispositivos móviles */
  @media (max-width: 768px) {
	.how-it-works-section h2 {
	  font-size: 1.5rem;
	}
  
	.how-it-works-section p {
	  font-size: 0.9rem;
	  padding: 0 15px;
	}
  
	.video-placeholder {
	  width: 90%;
	}
  
	.play-button {
	  width: 50px;
	  height: 50px;
	}
  
	.play-button i {
	  font-size: 20px;
	}
  }
  
  @media (max-width: 480px) {
	.how-it-works-section h2 {
	  font-size: 1.3rem;
	}
  
	.how-it-works-section p {
	  font-size: 0.8rem;
	}
  
	.play-button {
	  width: 40px;
	  height: 40px;
	}
  
	.play-button i {
	  font-size: 18px;
	}
  }
  </style>
  