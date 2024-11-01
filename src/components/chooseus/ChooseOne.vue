<template>
	<section id="contact">
	<div class="faq-container">
	  <!-- Sección de texto FAQ e imagen del robot -->
	  <div class="faq-left">
		<h2>FAQ</h2>
  
		<div class="faq-robot">
		  <img src="/assets/proyecto/botfaq.png" alt="Robot" class="robot-image">
		</div>
	  </div>
  
	  <!-- Sección de preguntas FAQ -->
	  <div class="faq-right">
		<div v-for="(faq, index) in faqs" :key="index" class="faq-item">
		  <div class="faq-question" @click="toggleFAQ(index)">
			{{ faq.question }}
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  viewBox="0 0 16 16"
			  :class="{'rotate-icon': faq.open, 'arrow-icon': true}"
			>
			  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
			</svg>
		  </div>
		  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
			<p v-if="faq.open" class="faq-answer">{{ faq.answer }}</p>
		  </transition>
		</div>
	  </div>
	</div>
</section>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		faqs: [
		  {
			question: "¿Cómo puedo registrar mi empresa en Smart Sales?",
			answer: "Para registrar tu empresa, simplemente completa el formulario de inscripción con los datos de tu negocio, incluyendo nombre, dirección y tipo de negocio. También puedes conectar tu base de datos de productos directamente al sistema.",
			open: false
		  },
		  {
			question: "¿Cómo se integra el chatbot con WhatsApp?",
			answer: "Nuestro sistema utiliza las librerías de OpenAI y WhatsApp para integrar el chatbot de GPT-4, permitiendo que tus clientes interactúen de manera natural y fluida a través de WhatsApp.",
			open: false
		  },
		  {
			question: "¿Es seguro almacenar las conversaciones y datos de contacto?",
			answer: "Sí, en Smart Sales priorizamos la seguridad y privacidad de los datos. Utilizamos encriptación y cumplimos con todas las regulaciones de protección de datos aplicables.",
			open: false
		  },
		  {
			question: "¿Puedo gestionar productos de diferentes tipos de negocios con Smart Sales?",
			answer: "Absolutamente. Smart Sales es flexible y adaptable, permitiéndote gestionar productos y servicios de diversos tipos de negocios de manera eficiente.",
			open: false
		  },
		  {
			question: "¿Cómo se realiza el seguimiento de los pagos y el estatus de las órdenes?",
			answer: "Nuestro sistema actualiza automáticamente el estatus de las órdenes tras la confirmación del pago y envía notificaciones a tus clientes sobre el progreso de su orden. Además, proporciona un enlace para que los clientes consulten el estatus de su orden en cualquier momento.",
			open: false
		  }
		]
	  };
	},
	methods: {
	  toggleFAQ(index) {
		this.faqs[index].open = !this.faqs[index].open;
	  },
	  beforeEnter(el) {
		el.style.height = '0';
		el.style.opacity = '0';
	  },
	  enter(el, done) {
		el.offsetHeight; // trigger reflow
		el.style.transition = 'height 0.5s ease, opacity 0.5s ease';
		el.style.height = `${el.scrollHeight}px`;
		el.style.opacity = '1';
		done();
	  },
	  leave(el, done) {
		el.style.transition = 'height 0.5s ease, opacity 0.5s ease';
		el.style.height = '0';
		el.style.opacity = '0';
		done();
	  }
	}
  };
  </script>
  
  <style scoped>
  /* Sección izquierda: texto e imagen */
  .faq-left {
	flex: 1;
	min-width: 45%; 
	max-width: 50%;
	margin-right: 20px; 
  }
  
  .faq-left h2 {
	font-size: 5rem;
    margin-left: -279px;
    margin-top: -53px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .faq-left p {
	font-size: 1rem;
	color: white;
	margin-bottom: 20px;
  }
  
  .faq-robot {
	text-align: center; 
  }
  
  .robot-image {
    width: 194px;
    height: auto;
    max-width: 100%;
    position: relative;
    top: -29px;
    left: -62px;

  }
  
  /* Sección derecha: preguntas FAQ */
  .faq-right {
	flex: 1;
    min-width: 45%;
    max-width: 50%;
    margin-left: -51px;
  }
  
  .faq-item {
	margin: 10px 0;
  }
  
  .faq-question {
	background-color: white;
	padding: 15px;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: background-color 0.3s ease;
	color: #313131;
    font-weight: 700;

  }
  
  .faq-question:hover {
	background-color: #f0f0f0;
  }
  
  .faq-answer {
	background-color: white;
	color: black;
	margin-top: 5px;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow: hidden; /* Asegura que no haya desbordamientos */
  }
  
  .arrow-icon {
	width: 16px; /* Ajusta el ancho del icono */
	height: 16px; /* Ajusta la altura del icono */
	transition: transform 0.3s ease;
	stroke: #00bf90; /* Color del icono */
	stroke-width: 2; /* Grosor del icono */
  }
  
  .rotate-icon {
	transform: rotate(180deg);
  }
  
  /* Transición de opacidad para la respuesta */
  .fade-enter-active,
  .fade-leave-active {
	transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
	opacity: 0;
  }
  
  /* Estilos responsivos */
  @media (max-width: 768px) {
	.faq-container {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        display: flex;
	}
	.faq-left h2 {
    font-size: 5rem;
    margin-left: -24px;
    margin-top: -23px;
    font-weight: bold;
    color: white;
    margin-bottom: 81px;
    text-align: center;
}
	.faq-left,
	.faq-right {
		min-width: 88%;
        max-width: 9%;
        margin-right: 0;
        margin-left: 0;
	}
  
	.faq-question {
	  padding: 10px; /* Ajustar el tamaño de las preguntas para pantallas pequeñas */
	}
  
	.robot-image {
		width: 81%;
        left: -38px;
	}
	.faq-robot{
    text-align: center;
    width: 39vh;
}
  }
  </style>
  