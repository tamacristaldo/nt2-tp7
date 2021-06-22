<template>
  <section class="src-components-nabvar">
    <div id="navigator">
      <button id="reset" @click="resetear()">{{ getRestartText }}</button>
      <span id="message"> {{ getMessageDisplay }} </span>

      <button
        id="easy"
        :class="!getDifficulty && 'selected'"
        @click="changeToEasy"
      >
        easy
      </button>

      <button
        id="hard"
        :class="getDifficulty && 'selected'"
        @click="changeToHard"
      >
        hard
      </button>
      <Contenedor />
    </div>
  </section>
</template>

<script>
import Contenedor from "./Contenedor.vue";
export default {
  name: "src-components-nabvar",
  components: {
    Contenedor,
  },
  props: [],
  mounted() {},
  data() {
    return {
      isHard: true,
      colorElegido: "",
    };
  },
  methods: {
    changeToEasy() {
      const level = {
        isHard: false,
        colorCount: 3,
      };
      this.$store.dispatch("setDifficulty", level);
      this.$store.dispatch("restart", this.$store.state.colorCount);
    },
    changeToHard() {
      const level = {
        isHard: true,
        colorCount: 6,
      };
      this.$store.dispatch("setDifficulty", level);
      this.$store.dispatch("restart", this.$store.state.colorCount);
    },
    resetear() {
      this.$store.dispatch("restart", this.$store.state.colorCount);
    },
  },
  computed: {
    getMessageDisplay() {
      return this.$store.state.messageDisplay;
    },
    getRestartText() {
      return this.$store.state.restartText;
    },
    getDifficulty() {
      return this.$store.state.isHard;
    },
  },
};
</script>

<style scoped>
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
.selected {
  background-color: steelblue;
  color: white;
}
</style>
