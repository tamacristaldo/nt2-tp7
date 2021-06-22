<template>
  <div id="container">
    <div
      v-for="(color, i) in getGridColors"
      :key="i"      
      class="square"
      @click="onClickColor(color)"
      :style="{  background: color }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "src-components-contenedor",
  props: ["isHard"],

  mounted() {
    this.$store.dispatch("restart", this.$store.state.colorCount);
  },
  data() {
    return {};
  },
  methods: {
    onClickColor(color) {
      this.$store.dispatch("setPickedColor", color);
    },
  },
  computed: {
    getGridColors() {
      return this.$store.state.colors;
    },
  },
};
</script>

<style scoped>
#container {
  margin: 20px auto;
  max-width: 600px;
}
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
