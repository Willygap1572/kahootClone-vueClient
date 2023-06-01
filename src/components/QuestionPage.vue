<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button
          class="btn"
          style="
            background-color: rgb(227, 128, 128);
            border-color: rgb(151, 77, 77);
          "
          :disabled="buttonClicked"
          @click="handleClick(1)"
        ></button>
      </div>
      <div class="col">
        <button
          class="btn"
          style="
            background-color: rgb(164, 255, 164);
            border-color: rgb(116, 183, 116);
          "
          :disabled="buttonClicked"
          @click="handleClick(2)"
        ></button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn"
          style="
            background-color: rgb(95, 95, 209);
            border-color: rgb(67, 67, 145);
          "
          :disabled="buttonClicked"
          @click="handleClick(3)"
        ></button>
      </div>
      <div class="col">
        <button
          class="btn"
          style="
            background-color: rgb(234, 234, 130);
            border-color: rgb(175, 175, 97);
          "
          :disabled="buttonClicked"
          @click="handleClick(4)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const myVar = import.meta.env.VITE_DJANGOURL;
export default {
  data() {
    return {
      buttonClicked: false,
    };
  },
  methods: {
    handleClick(buttonNumber) {
      this.buttonClicked = true;
      // Llamar a la API para guardar el botón pulsado
      console.log(this.$store.state.uuidP);
      console.log(this.$store.state.participant);
      axios
        .post(myVar + "/api/guess/", {
          game: this.$store.state.publicId,
          uuidp: this.$store.state.uuidP,
          answer: buttonNumber,
        })
        .then(() => {
          console.log("Button clicked:", buttonNumber);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
}

.btn {
  width: 50vw;
  height: 50vh;
  margin: 0;
  padding: 0;
}
</style>
