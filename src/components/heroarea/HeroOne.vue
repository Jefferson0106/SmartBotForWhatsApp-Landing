<script setup>
import { onMounted } from 'vue';

const scrollToSection = () => {
   const projectSection = document.getElementById('favulo');
   if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
   }
}

onMounted(() => {
   $('.homepage-slides').owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      slideSpeed: 600,
      animateOut: 'fadeOut',
      navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
      responsive: {
         0: { items: 1, nav: false, dots: false },
         600: { items: 1, nav: false, dots: false },
         768: { items: 1, nav: false, dots: false },
         1100: { items: 1, nav: true, dots: false }
      }
   });

   $(".homepage-slides").on("translate.owl.carousel", function () {
      $(".single-slide-item h1, .single-slide-item h3, .single-slide-item p, .single-slide-item .main-btn")
         .removeClass("animated fadeInUp fadeInDown zoomIn")
         .css("opacity", "0");
   });

   $(".homepage-slides").on("translated.owl.carousel", function () {
      $(".single-slide-item h1").addClass("animated fadeInLeft").css("opacity", "1");
      $(".single-slide-item h3").addClass("animated fadeInRight").css("opacity", "1");
      $(".single-slide-item p").addClass("animated zoomIn").css("opacity", "1");
      $(".single-slide-item .main-btn").addClass("animated fadeInUp").css("opacity", "1");
   });
});
</script>

<template>
	<section id="hero">
		<div class="single-slide-item">
			<div class="overlay"></div>
			<div class="hero-area-content">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-12 wow fadeInUp animated" data-wow-delay=".2s">
							<div class="section-title">
								<div class="contenedor-imagen-logo">
									<img src="/assets/proyecto/floating2.png" class="img-Logo-SSA-simbolo"
										alt="Logo Smart Sales">
								</div>

								<div class="contenedor-IMPULSA-TUS-VENTAS">
									<h1>AUTOMATIZA, OPTIMIZA Y MEJORA</h1>
									<h3>LA EXPERIENCIA DEL CLIENTE</h3>
								</div>

								<div class="contenedor-Industrial">
									<p>
										Descubre cómo nuestra solución de atención al cliente multi-empresa
										puede transformar la forma en que gestionas tus productos, servicios y
										clientes. Con Smart Sales, maximiza la eficiencia y mejora la experiencia
										de tus clientes con herramientas avanzadas de automatización e integración.
									</p>
									<button class="main-btn" @click="scrollToSection">
										Contáctanos
									</button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>