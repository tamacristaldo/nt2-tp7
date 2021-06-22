<template>
  <section class="src-components-cabecera">
    <div id="header" :style="{ 'background-color': getBackgroundColor }">
      <h1>
        {{ titulo }}
        <br />
        <span id="colorDisplay">{{ getPickedColor }}</span>
        <br />
        {{ subtitulo }}
      </h1>
    </div>
    <Navbar />
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "src-components-cabecera",
  props: [],
  mounted() {},
  components: {
    Navbar,
  },
  data() {
    return {
      titulo: "The Great",
      subtitulo: "Guessing Game",      
    };
  },
  methods: {
  },
  computed: {
    getBackgroundColor() {
      return this.$store.state.headerColor;
    },
    getPickedColor() {
      return this.$store.state.pickedColor;
    },
  },
};
</script>

<style scoped>
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
