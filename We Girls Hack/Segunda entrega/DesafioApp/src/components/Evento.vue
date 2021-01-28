<template lang=html>
    <div>
		<Nav/>
		<div class="volverAtras">
			<a href="">
				<img :src="require('../assets/flecha.png')" class="flecha" />
				<div class="atras">Atrás</div>
			</a>
	  </div> 
		<img src="../assets/logocurso.png" class="imgEvento" />
		<div class="eventoc">
			<div class="descripcionExtra"> 
				{{descripcion}} 
				<h3 class="titulo">{{evento1}}</h3>
			</div>
		
			<div class="descripcionE" v-for="(idEvento, index) of evento">
				<p>Lugar:{{idEvento.nombre}}</p>
		    	<p>Direccion:{{}}</p>
				<p>Fecha:{{idEvento.fecha}}</p>
				<p>Hora:{{idEvento.hora}}</p>
			</div>
		
		</div>
		<div class="botonInscribir">
			<button type="submit" class="btn btn-celeste btn-insc"><router-link class="router-hover" :to="'/Formulario'">Inscribirme</router-link></button>
		</div>
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
	name: 'Evento',
	data(){return {
		descripcion: `En esta charla vas a aprender a diseñar tus primeras
		 interfaces de aplicación para el celular y resolver una problemática cotidiana.
		 En esta charla vas a aprender a diseñar tus primeras interfaces de aplicación para el celular y resolver
		 una problemática cotidiana.`,
		evento1:`DETALLE DEL EVENTO`,
		evento:[]
		}
	},
	
	mounted() {
		const id = this.$route.params.idEvento
	
		fetch('http://localhost:3000/eventos/'+ id, {mode:'cors'}) 
 		 .then(res=> {
			return res.json();
 		 	}).then(data=> {
			  	this.evento = data;
		 		
		});
			
	
	}
	
}
</script>