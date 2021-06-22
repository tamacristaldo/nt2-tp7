<template>
  <div id="app">
    <Cabecera />    
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
export default {
  name: 'App',
  components: {
    Cabecera
  }
}
</script>

<style>
#app {
}
body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
}
</style>
