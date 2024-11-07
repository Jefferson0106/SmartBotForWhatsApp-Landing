<template>
  <section id="project">
    <div class="project-area projecto-tec-centere-title">
      <div class="container">
        <div class="offset-lg-2 col-lg-8 text-center">
          <div>
            <div class="form-container">
              <form @submit.prevent="showModal">
                <div class="input-group">
                  <div class="input-wrapper">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre completo"
                      required
                      v-model="form.nombre"
                    />
                    <i class="fas fa-user input-icon"></i>
                  </div>
                  <div class="input-wrapper">
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="Correo electrónico"
                      required
                      v-model="form.correo"
                    />
                    <i class="fas fa-envelope input-icon"></i>
                  </div>
                </div>

                <div class="input-group">
                  <div class="input-wrapper">
                    <vue-tel-input
                      inputId="telefono"
                      placeholder="Ingrese un número de teléfono"
                      name="telefono"
                      v-model="form.telefono"
                      :mode="'international'"
                      :inputOptions="inputTelOption"
                      @input="onPhoneInput"
                      @open="onDropdownOpen(true)"
                      @close="onDropdownOpen(false)"
                    >
                      <template v-slot:arrow-icon>
                        <span>{{ openTelInput ? '▲' : '▼' }}</span>
                      </template>
                    </vue-tel-input>
                  </div>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Empresa"
                      required
                      v-model="form.nombreEmpresa"
                    />
                    <i class="fas fa-building input-icon"></i>
                  </div>
                </div>

                <div class="input-wrapper">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Mensaje (opcional)"
                    v-model="form.mensaje"
                  ></textarea>
                  <i class="fas fa-comment input-icon"></i>
                </div>
                <button type="submit" class="comimenza">COMIENZA AHORA</button>
              </form>
            </div>
          </div>
          <div v-if="isModalVisible" class="modal">
            <div class="modal-content">
              <div class="modal-text">
                <p>¿Estás seguro de que quieres enviar el formulario?</p>
              </div>
              <div class="modal-buttons">
                <button @click="submitForm">Aceptar</button>
                <button class="cancelar" @click="hideModal">Cancelar</button>
              </div>
            </div>
          </div>

          <div v-if="isThankYouModalVisible" class="modal">
            <div class="modal-content">
              <i class="fa-solid fa-circle-check" style="color: green; font-size: 5em;"></i>
              <p>Gracias por contactarnos, nos estaremos comunicando contigo en breve.</p>
              <button @click="hideThankYouModal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { VueTelInput } from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';

export default {
  name: "NuevoQsd",
  components: {
    VueTelInput,
  },
  data() {
    return {
      form: {
        id: "",
        nombre: "",
        correo: "",
        telefono: "",
        nombreEmpresa: "",
        mensaje: "",
        Token: "",
      },
      inputTelOption: {
        placeholder: 'Ingrese un número de teléfono',
        isSaveMode: true,
        defaultCountry: 'us',
      },
      isModalVisible: false,
      isThankYouModalVisible: false,
      openTelInput: false,
    };
  },
  methods: {
    onDropdownOpen(isOpen) {
      this.openTelInput = isOpen;
    },
    onPhoneInput(value) {
      console.log("Número de teléfono actualizado:", value);
      this.form.telefono = value; 
    },
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    submitForm() {
      console.log("Submit button clicked");

      const phonePattern = /^[0-9]{13}$/;
      console.log("Número de teléfono ingresado:", this.form.telefono);

      if (!phonePattern.test(this.form.telefono)) {
        toast.error("El número de teléfono debe contener exactamente 13 números.", {
          autoClose: 3000,
        });
        return;
      }

      this.form.Token = localStorage.getItem("Token");
      console.log("Enviando los datos a la API:", this.form);
      axios.post("https://smartsalesagent-api.azurewebsites.net/SmartSalesAgent/Registro", this.form)
        .then(data => {
          console.log("Registro exitoso:", data); 
          toast.success("¡Registro creado con éxito!", {
            autoClose: 3000,
          });
          this.isThankYouModalVisible = true;
          setTimeout(() => {
            this.hideThankYouModal();
          }, 5000);
        })
        .catch(error => {
          console.error("Error al crear el registro:", error); 
          toast.error("Hubo un error al crear el registro.", {
            autoClose: 3000,
          });
        });

      this.isModalVisible = false;
    },
    hideThankYouModal() {
      this.isThankYouModalVisible = false;
      this.$router.push("/"); // Redirigir al inicio si es necesario
    }
  }
};
</script>

