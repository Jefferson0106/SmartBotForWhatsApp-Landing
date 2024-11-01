<template>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-content">
          <p class="copyright-line">© Smart Sales Agent 2024</p>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  @import '../../../public/assets/css/responsive.css';

  @media only screen and (max-width: 767px) {

  .footer-bottom .container {
	display: flex;
	justify-content: center;
	align-items: center;
  }
  
  .footer-bottom .footer-content {
	position: relative;
  }
  
  .footer-content::before {
    content: '';
        position: absolute;
        top: -10px;
        left: -38px;
        right: 0;
        height: 4px;
        background-color: white;
        width: 150%;
  }
  
  .copyright-line {
	margin: 0;
	font-size: 14px; /* Tamaño de fuente similar al que muestras en la imagen */
  }
}
  </style>