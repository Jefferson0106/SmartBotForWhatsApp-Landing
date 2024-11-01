<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentPageTitle = computed(() => {
  let currentPath = "";
  switch (route.name) {
      case "about":
      currentPath = "About Us";
      break;   
      case "choose-us":
      currentPath = "Choose Us";
      break;         
      case "team":
      currentPath = "Our Team";
      break;   
      case "price":
      currentPath = "Pricing Plan";
      break;   
      case "faq":
      currentPath = "FAQ";
      break;  
      case "service-1":
      currentPath = "Service - 01";
      break; 
      case "service-2":
      currentPath = "Service - 02";
      break;        
      case "service-details":
      currentPath = "Service Details";
      break;   
      case "project":
      currentPath = "Project";
      break;   
      case "project-details":
      currentPath = "Project Details";
      break;   
      case "blog":
      currentPath = "Blog";
      break;   
      case "blog-details":
      currentPath = "Blog Details";
      break;   
      case "contact":
      currentPath = "Contact";
      break;   
      default:
      currentPath = route.name;
      break;
  }

  return currentPath;
});
</script>

<template>

    <div class="breadcroumb-area bread-bg">
    <div class="overlay"></div>
    <div class="hero-area-content">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6 wow fadeInUp animated" data-wow-delay=".2s">
                    <div class="section-title">
                        <h1 class="rando">IMPULSA TUS VENTAS</h1>
                        <h3>Lleva tu negocio al siguiente nivel</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the lorem</p>
                        <router-link :to="{name:'about'}" class="main-btn">contáctanos</router-link>
                    </div>
                </div>
                <div class="col-lg-6 text-right wow fadeInUp animated" data-wow-delay=".4s">
                    <img src="/assets/resourcomp/Floating-Robot.png" alt="Robot" class="robot-image">
                </div>
            </div>
        </div>
    </div>
 	</div>

</template>

<style>
@import '../../public/assets/css/responsive.css';

</style>
