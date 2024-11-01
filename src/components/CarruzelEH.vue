<template>
    <div class="carousel-container">
      <div class="carousel" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item"
          :class="{ active: activeIndex === index }"
        >
          <div class="card">
            <div class="card-header">
              <img :src="item.image" alt="profile" class="profile-img" />
            </div>
            <div class="card-body">
              <h2>{{ item.name }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: 0,
        items: [
          {
            name: "Person One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/100",
          },
          {
            name: "Person Two",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/100",
          },
          {
            name: "Person Three",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/100",
          },
        ],
      };
    },
    methods: {
      prevSlide() {
        this.activeIndex =
          this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
      },
      nextSlide() {
        this.activeIndex =
          this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1;
      },
    },
    mounted() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // Cambia cada 3 segundos
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 300px;
    position: relative;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.5;
    transform: scale(0.9);
  }
  
  .carousel-item.active {
    opacity: 1;
    transform: scale(1);
  }
  
  .card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
  }
  
  .card-header {
    background: #2a9df4;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid white;
    margin-top: -40px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  
  .card-body h2 {
    font-size: 1.2rem;
    margin: 10px 0;
    font-weight: bold;
    color: #333;
  }
  
  .card-body p {
    color: #666;
    font-size: 0.9rem;
  }
  
  .carousel-controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }
  
  .carousel-controls button {
    background: #2a9df4;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .carousel-controls button:hover {
    background: #1b7ac5;
  }
  </style>
  