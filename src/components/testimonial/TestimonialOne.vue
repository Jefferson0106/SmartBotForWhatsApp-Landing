<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const subscriptions = ref([]);


const formatPrice = (price, currency) => {
  const symbol = currency === 'USD' ? '$' : currency; 
  return price === 0 ? 'Gratis' : `${symbol}${price}`; 
};


const fetchSubscriptions = async () => {
  try {
    const { data } = await axios.get(
      'https://smartsalesagent-api.azurewebsites.net/Subscriptions/GetList?page=1&rows=100'
    );
    subscriptions.value = data.data.items; 
  } catch (error) {
    console.error('Error al obtener las suscripciones:', error);
  }
};


const getIconForFeature = (feature) => {
  const lowerFeature = feature.toLowerCase();
  
  if (lowerFeature.includes('mensaje') || lowerFeature.includes('mensajes')) {
    return 'ion-chatbubbles'; 
  } else if (lowerFeature.includes('Soporte')) {
    return 'ion-headset'; 
  } else if (lowerFeature.includes('automatización')) {
    return 'ion-gear-a'; 
  } else if (lowerFeature.includes('GPT') || lowerFeature.includes('GPT')) {
    return 'ion-brain'; 
  } else if (lowerFeature.includes('almacenamiento') || lowerFeature.includes('backups')) {
    return 'ion-cloud'; 
  } else if (lowerFeature.includes('integración')) {
    return 'ion-link'; 
  } else if (lowerFeature.includes('productos') || lowerFeature.includes('servicios')) {
    return 'ion-pricetag'; 
  } else if (lowerFeature.includes('Consultoría') || lowerFeature.includes('formación')) {
    return 'ion-school'; 
  } else if (lowerFeature.includes('pago') || lowerFeature.includes('ordenes')) {

    return 'ion-social-whatsapp'; 
  } else if (lowerFeature.includes('Capacitación') || lowerFeature.includes('empresa')) {
    
    return 'ion-calendar'; 
  } else if (lowerFeature.includes('Prueba') || lowerFeature.includes('Prueba')) {
    



    return 'ion-card';
  } else {
    return 'ion-checkmark-circled'; 
  }
};

onMounted(() => {
  fetchSubscriptions();
});
</script>

<template>
	<section id="counterOne">
	  <div class="container">
		<div class="snip1404">
		  <h3 class="h3-planes">Vea nuestra variedad de planes</h3>
  
		  <div
			v-for="(plan, index) in subscriptions"
			:key="plan.idSubscription"
			class="plan"
			:class="{ featured: plan.name === 'AVANZADO', ['plan-' + index]: true }" 
		  >
			<header>
			  <h4 class="plan-title">{{ plan.name }}</h4>
			  <div class="plan-cost">
				<span class="plan-price">{{ formatPrice(plan.price, plan.nameCoinType) }}</span>
				<span class="plan-type">/ {{ plan.durationInDays > 0 ? `${plan.durationInDays} días` : plan.nameType }}</span>
			  </div>
			</header>
  
			<ul class="plan-features">
			
			  <li v-for="(feature, idx) in plan.description.split('\n')" :key="idx">
				<i :class="getIconForFeature(feature)"></i> {{ feature }}
			  </li>
			</ul>
  
			<div class="plan-select">
			  <a href="#">Selecciona Plan</a>
			</div>
		  </div>
		</div>
	  </div>
	</section>
</template>

<style scoped>
@import '../../../public/assets/css/responsive.css';
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);
</style>