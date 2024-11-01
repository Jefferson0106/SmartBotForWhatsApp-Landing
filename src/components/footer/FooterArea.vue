<script setup>
import { ref } from 'vue';

// Estado para manejar la visibilidad del modal
const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

// Función de scroll que ya tienes
function scrollToSection(event, id, offset = 100) {
  event.preventDefault();

  const target = document.querySelector(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' 
  });
}
</script>

<template>
  <footer class="footer-area">
    <div class="container">
      <div class="footer-up">
        <div class="row gy-5">
          <!-- Sección Logo -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="logo">
              <img class="scc" src="/assets/proyecto/logo-white.png" alt="dustrian-logo">
            </div>
          </div>
          <!-- Sección Bienvenidos -->
          <div class="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
            <h5>Bienvenidos</h5>
            <ul>
              <li>
                <a class="nav-link" href="#hero" @click="scrollToSection($event, '#hero')">Inicio</a>
                <a class="nav-link" href="#about" @click="scrollToSection($event, '#about')">Conócenos</a>
                <a class="nav-link" href="#counterOne" @click="scrollToSection($event, '#counterOne', 60)">Planes</a>
                <a class="nav-link" href="#project" @click="scrollToSection($event, '#project', 230)">Contáctanos</a>
                <a class="nav-link" href="#contact" @click="scrollToSection($event, '#contact', 130)">FQAS</a>
              </li>
            </ul>
          </div>
          <!-- Sección Legal -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <h5>Legal</h5>
            <ul>
              <li>
                <a href="#" @click.prevent="openModal">Aviso de Privacidad</a>
                <a href="#" @click.prevent="openModal('terms')">Términos y Condiciones</a>
              </li>
            </ul>
          </div>
          <!-- Sección Contacto -->
          <div class="col-lg-3 col-md-6">
            <div class="subscribe-form">
              <h5>Contacto</h5>
              <h6>+58 414-5038466</h6>
              <h6>contacto@smartsalesagent.app</h6>
              <form>
                <a href="https://www.instagram.com/smartsalesagent?igsh=MWN2dzNocmt4MTM5aw%3D%3D&utm_source=qr">
                  <img src="/assets/img/intagram.png" alt="Instagram" class="redes_sociales">
                </a>
                <a href="https://wa.me/584145038466">
                  <img src="/assets/img/WhatsApp .png" alt="WhatsApp" class="redes_sociales">
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal para el Aviso de Privacidad -->
    <div v-if="showModal" class="modal-overlay">
  <div class="modal-content">
    <h2>Aviso de Privacidad</h2>
    <p>
      En Smart Sales, respetamos tu privacidad y estamos comprometidos a proteger los datos personales que recopilamos de nuestros usuarios y clientes. Este aviso de privacidad describe cómo recogemos, utilizamos y protegemos tu información.
    </p>
    <h3>1. Información que Recopilamos</h3>
    <p>
      Recopilamos la siguiente información cuando utilizas nuestros servicios:
      <ul>
        <li>Datos de registro de empresas: nombre de la empresa, dirección, tipo de negocio, y contexto de negocio.</li>
        <li>Información de productos y servicios: detalles y descripciones de los productos y servicios que ofreces.</li>
        <li>Conversaciones y datos de contacto: historial de conversaciones con los clientes y datos de contacto básicos.</li>
        <li>Detalles de órdenes y citas: información sobre pedidos y citas, incluyendo número de orden, productos, cantidades, montos, etc.</li>
        <li>Información de pago: detalles de pagos y confirmaciones de transacciones.</li>
      </ul>
    </p>
    <h3>2. Uso de la Información</h3>
    <p>
      Utilizamos la información recopilada para los siguientes propósitos:
      <ul>
        <li>Proveer y mejorar nuestros servicios.</li>
        <li>Facilitar la gestión de productos y servicios de tu empresa.</li>
        <li>Automatizar la interacción con los clientes mediante nuestro chatbot integrado con GPT-4 y WhatsApp.</li>
        <li>Procesar y gestionar órdenes y citas.</li>
        <li>Realizar el seguimiento de pagos y actualizar el estatus de las órdenes.</li>
        <li>Cumplir con las obligaciones legales y normativas aplicables.</li>
      </ul>
    </p>
    <h3>3. Protección de la Información</h3>
    <p>
      Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, pérdida, alteración o destrucción. Utilizamos encriptación para proteger la información sensible y garantizamos el cumplimiento de las regulaciones de protección de datos aplicables.
    </p>
    <h3>4. Compartición de Información</h3>
    <p>
      No compartimos tu información personal con terceros, salvo en los siguientes casos:
      <ul>
        <li>Con tu consentimiento expreso.</li>
        <li>Para cumplir con obligaciones legales o requerimientos gubernamentales.</li>
        <li>Con proveedores de servicios que actúan en nuestro nombre y bajo nuestras instrucciones, asegurando que también cumplan con las regulaciones de protección de datos.</li>
      </ul>
    </p>
    <h3>5. Derechos del Usuario</h3>
    <p>
      Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, puedes contactarnos a través de los medios proporcionados en este aviso.
    </p>
    <h3>6. Cambios en el Aviso de Privacidad</h3>
    <p>
      Podemos actualizar este aviso de privacidad periódicamente. Te notificaremos sobre cualquier cambio importante a través de nuestros canales de comunicación habituales.
    </p>
    <h3>7. Contacto</h3>
    <p>
      Si tienes alguna pregunta o inquietud sobre este aviso de privacidad o sobre cómo manejamos tus datos personales, por favor contáctanos en:
      <ul>
        <li>Correo electrónico: soporte@smartsales.com</li>
        <li>Teléfono: +123 456 7890</li>
      </ul>
    </p>
    <button @click="closeModal">Cerrar</button>
  </div>
</div>
  </footer>
</template>

<style scoped>
/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  text-align: left;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  position: relative;
  overflow-y: auto;
  max-height: 80%;
}

.modal-content h2 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #007bff;
}

.modal-content h3 {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #0056b3;
}

.modal-content p {
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
  text-align: justify;
}

.modal-content ul {
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 15px;
}

.modal-content li {
  margin-bottom: 8px;
  font-size: 16px;
}

.modal-content button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  display: inline-block;
}

.modal-content button:hover {
  background-color: #0056b3;
}

/* Estilos para manejar el scroll si el contenido es demasiado largo */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}


.redes_sociales {
  width: 70px;
  margin-right: 10px;
}
</style>
