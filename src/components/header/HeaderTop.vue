<template>
	<section id="testimonios">
	  <div class="faq-container">
		<div class="testimonial-carousel">
		  <h2 class="carousel-title">Testimonios</h2>
		  <div
			class="carousel-container"
			@wheel="onMouseScroll"
		  >
			<div
			  v-for="(testimonial, index) in testimonials"
			  :key="index"
			  :class="[
				'testimonial-slide',
				{ 
				  center: index === currentIndex,
				  left: index === getLeftIndex(),
				  right: index === getRightIndex()
				}
			  ]"
			>
			  <img :src="testimonial.image" alt="User photo" class="testimonial-image" />
			  <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
			  <p class="testimonial-author">{{ testimonial.name }}</p>
			  <p class="testimonial-position">{{ testimonial.position }}</p>
			</div>
		  </div>
		  <div class="carousel-controls">
			<button @click="prevSlide" class="carousel-control prev">&#10094;</button>
			<button @click="nextSlide" class="carousel-control next">&#10095;</button>
		  </div>
		</div>
	  </div>
	</section>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		testimonials: [
		{ image: '/assets/proyecto/persona11.png', quote: 'Este producto ha transformado completamente nuestra forma de trabajar. ¡Altamente recomendable!', name: 'Juan Pérez', position: 'CEO en Empresa XYZ' },
        { image: '/assets/proyecto/persona3.png', quote: 'El servicio ha superado nuestras expectativas, el soporte es excepcional.', name: 'Ana González', position: 'Especialista en Marketing' },
        { image: '/assets/proyecto/persona.png', quote: 'Desde que comenzamos a usar este producto, hemos visto un aumento significativo en nuestra eficiencia.', name: 'Carlos Martínez', position: 'Gerente de Producto' },
        { image: '/assets/proyecto/persona1.png', quote: 'La calidad y atención al cliente son insuperables. ¡Muy satisfecho con la decisión de compra!', name: 'Sofía López', position: 'Directora de Ventas' },
        { image: '/assets/proyecto/persona10.png', quote: 'Un cambio radical en nuestra estrategia, gracias a este increíble servicio. ¡Lo recomiendo al 100%!', name: 'Miguel Torres', position: 'Cliente Satisfecho' },
        { image: '/assets/proyecto/persona9.png', quote: 'Innovador y eficiente, ha mejorado nuestra comunicación interna.', name: 'Laura Rojas', position: 'Jefa de Recursos Humanos' },
        { image: '/assets/proyecto/persona4.png', quote: 'Excelente atención y un producto que cumple con todas nuestras expectativas.', name: 'Fernando Ruiz', position: 'Coordinador de Proyectos' },
        { image: '/assets/proyecto/persona5.png', quote: 'No podríamos estar más contentos con los resultados que hemos obtenido.', name: 'Claudia Fernández', position: 'Analista de Datos' },
        { image: '/assets/proyecto/persona6.png', quote: 'Un soporte técnico excepcional y un producto intuitivo.', name: 'Javier Gómez', position: 'Desarrollador Web' },
        { image: '/assets/proyecto/persona7.png', quote: 'Transformó nuestra manera de trabajar, ¡esencial para cualquier empresa!', name: 'Elena Martínez', position: 'Directora de Operaciones' },
		],
		currentIndex: 0,
	  };
	},
	methods: {
	  nextSlide() {
		this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
	  },
	  prevSlide() {
		this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
	  },
	  onMouseScroll(event) {
		if (event.deltaY > 0) {
		  this.nextSlide();
		} else {
		  this.prevSlide();
		}
	  },
	  getLeftIndex() {
		return (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
	  },
	  getRightIndex() {
		return (this.currentIndex + 1) % this.testimonials.length;
	  },
	},
  };
  </script>
  
  <style scoped>
  .testimonial-carousel {
	width: 90%;
	margin: auto;
	position: relative;
	overflow: hidden;
	text-align: center;
	background-color: #00bf90;
	padding: 40px 20px;
	border-radius: 15px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .carousel-title {
	font-size: 2.5em;
	color: #ffffff;
	margin-bottom: 20px;
  }
  
  .carousel-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 300px;
  }
  
  .testimonial-slide {
	position: absolute;
	width: 60%;
	opacity: 0;
	transition: all 0.5s ease;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 15px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	transform: scale(0.8);
  }
  
  .testimonial-slide.center {
	opacity: 1;
	z-index: 2;
	transform: scale(1);
  }
  
  .testimonial-slide.left {
	opacity: 0.6;
	transform: translateX(-110%) scale(0.8);
  }
  
  .testimonial-slide.right {
	opacity: 0.6;
	transform: translateX(110%) scale(0.8);
  }
  
  .testimonial-image {
	border-radius: 50%;
	width: 100px;
	height: 100px;
	margin-bottom: 15px;
	border: 3px solid #00bf90;
  }
  
  .testimonial-quote {
	font-style: italic;
	margin: 15px 0;
	color: #333;
  }
  
  .testimonial-author {
	font-weight: bold;
	margin-top: 10px;
	color: #333;
  }
  
  .testimonial-position {
	color: #777;
	font-size: 0.9em;
  }
  
  .carousel-controls {
	display: flex;
	justify-content: center;
	margin-top: 20px;
  }
  
  .carousel-control {
	background-color: rgba(0, 0, 0, 0.7);
	color: #ffffff;
	border: none;
	font-size: 28px;
	cursor: pointer;
	padding: 12px;
	border-radius: 50%;
	margin: 0 10px;
	transition: background-color 0.3s;
  }
  
  .carousel-control:hover {
	background-color: rgba(0, 0, 0, 0.9);
  }
  
  @media only screen and (max-width: 767px) {
	.carousel-title {
		font-size: 3em;
        position: relative;
        top: -85px;
	}
  
	.testimonial-image {
	  width: 80px;
	  height: 80px;
	}
	.carousel-controls {
    display: flex;
    justify-content: center;
    margin-top: 117px;
}
.testimonial-carousel {
    width: 90%;
    margin: auto;
    position: relative;
    overflow: hidden;
    text-align: center;
    background-color: #00bf90;
    padding: 120px 20px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
  }
  </style>
  