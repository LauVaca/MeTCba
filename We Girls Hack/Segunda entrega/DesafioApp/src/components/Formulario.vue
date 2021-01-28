<template>
  <div>
    <Nav/>
		<div class="volverAtras">
			<a href="">
				<img :src="require('../assets/flecha.png')" class="flecha" />
				<div class="atras">Atrás</div>
			</a>
	  </div> 

    <h1 class="formularioTitulo">Formulario de inscripción</h1>

    <form v-on:submit.prevent="addParticipante" class="contenedorForm">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label class="labelForm">Nombre</label>
          <input
            type="text"
            v-model="nuevoParticipante.nombre"
            id="nombre"
            name="nombre"
            class="form-control"
          required/>
        </div>
        <div class="form-group col-md-6">
          <label class="labelForm">Apellido</label>
          <input
            type="text"
            v-model="nuevoParticipante.apellido"
            id="apellido"
            name="apellido"
            class="form-control"
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label class="labelForm">Edad</label>
          <select class="form-control mr-sm-2" v-model="nuevoParticipante.edad" required>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="mas">+18</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label class="labelForm">Nº documento</label>
          <input
            type="number"
            v-model="nuevoParticipante.nroDoc"
            id="nroDoc"
            name="nroDoc"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label class="labelForm">Fecha Nacimiento</label>
          <input
            type="date"
            v-model="nuevoParticipante.fechaNac"
            id="fechaNac"
            class="form-control"
            name="date"
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label class="labelForm">Nº celular</label>
          <input
            type="tel"
            v-model="nuevoParticipante.nroCel"
            id="nroCel"
            name="nroCelular"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label class="labelForm">Mail</label>
          <input
            type="mail"
            v-model="nuevoParticipante.mail"
            id="mail"
            name="mail"
            class="form-control"
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label class="labelForm">Nº celular emergencia</label>
          <input
            type="tel"
            v-model="nuevoParticipante.nroCelEmergencia"
            id="nroCelEmergencia"
            name="nroCelularEmergencia"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label class="labelForm">Nombre Tutor</label>
          <input
            type="text"
            v-model="nuevoParticipante.nombreTutor"
            id="idnombretutor"
            name="nombreTutor"
            class="form-control"
            required
          />
        </div>
      </div>

      <div class="botonInscribir">
        <button type="submit" class="btn btn-celeste" value>Enviar</button>
      </div>
    </form>

    <h1>Participantes</h1>
    <ul>
      <li v-for="participante in participantes" :key="participante.nombre">
        Nombre: {{participante.nombre}}<br>
        Apellido: {{participante.apellido}}<br>
        Edad: {{participante.edad}}<br>
        Nº documento: {{participante.nroDoc}}<br>
        Fecha Nacimiento: {{participante.fechaNac}}<br>
        Nº celular: {{participante.nroCel}}<br>
        Mail: {{participante.mail}}<br>
        Nº cel emergencia: {{participante.nroCelEmergencia}}<br>
        Nombre tutor: {{participante.nombreTutor}}
      </li>
    </ul>
    <Footer/>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'

export default {
  components:{
    Nav,
    Footer
  },
  name: "Formulario",
  data() {
    return {
      participantes: [],
      nuevoParticipante: {}
    };
  },
  methods: {
    addParticipante() {
      this.participantes.push(this.nuevoParticipante);
      this.nuevoParticipante = {};
    }
  }
  
}
</script>

<style>


</style>