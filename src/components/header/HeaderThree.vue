<script setup>
import { onMounted } from 'vue'

onMounted(() => {     
	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	$('.sticky-area').sticky({
		topSpacing: 0,
	});
});

const scrollToSection = (event, selector, offset = 0) => {
	event.preventDefault(); // Evita el comportamiento por defecto del enlace
	const target = document.querySelector(selector);
	const headerOffset = 100; // Ajusta este valor según la altura de tu encabezado
	const elementPosition = target.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.scrollY - headerOffset - offset;

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth" // Desplazamiento suave
	});
}
</script>

<template>
    <header id="header-3" class="header-area absolate-header">
 		<div class="sticky-area">
 			<div class="navigation">
 				<div class="container">
 					<div class="row align-items-center">
 						<div class="col-lg-3">
 							<div class="logo"> 								
								<router-link class="navbar-brand" to="/"><img src="/assets/proyecto/logo-white.png" alt=""></router-link>
 							</div>
 						</div>
 						<div class="col-lg-6">
							<div class="main-menu">
 								<nav class="navbar navbar-expand-lg">
 									<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 										<span class="navbar-toggler-icon"></span>
 										<span class="navbar-toggler-icon"></span>
 										<span class="navbar-toggler-icon"></span>
 									</button>

 									<div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
 										<ul class="navbar-nav m-auto">
 											<li class="nav-item">
 												<a class="nav-link" href="#hero" @click="scrollToSection($event, '#hero')">Inicio
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li> 

 											<li class="nav-item">
                                                <a class="nav-link" href="#about" @click="scrollToSection($event, '#about', -10)">Conócenos
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>
 											<li class="nav-item">
                                                <a class="nav-link" href="#counterOne" @click="scrollToSection($event, '#counterOne', -10)">Planes
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>


											 <li class="nav-item">
                                                <a class="nav-link" href="#project" @click="scrollToSection($event, '#project', 130)">Contáctanos
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>

											 <li class="nav-item">
                                                <a class="nav-link" href="#counterOne" @click="scrollToSection($event, '#comofunciona', -10)">Tutorial
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>

											 <li class="nav-item">
                                                <a class="nav-link" href="#counterOne" @click="scrollToSection($event, '#testimonios', -10)">Testimonios
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>


 											

 											<li class="nav-item">
                                                <a class="nav-link" href="#contact" @click="scrollToSection($event, '#contact', 10)">FQAS
 													<span class="sub-nav-toggler"></span>
 												</a>
 											</li>
 										</ul>

 									</div>
 								</nav>
 							</div>
 						</div>
 						<div class="col-lg-3 text-end">
 							<div class="header-right-content">
 								<a href="https://smartsalesagentbackoffice.azurewebsites.net/#/login" class="header-btn main-btn">Iniciar sesión</a>
 							</div>
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>
 	</header>
</template>
