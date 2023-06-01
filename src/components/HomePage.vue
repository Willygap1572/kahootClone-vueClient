<template>
  <div class="container mt-5">
    <h1>Ingrese su alias y el ID del juego</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="alias">Alias:</label>
        <input
          type="text"
          class="form-control"
          id="alias"
          v-model="alias"
          required
        />
      </div>
      <div class="form-group">
        <label for="game">ID del juego:</label>
        <input
          type="text"
          class="form-control"
          id="game"
          v-model="game"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
    <div v-if="errorMessage" class="mt-3 alert alert-danger">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
const myVar = import.meta.env.VITE_DJANGOURL;

export default {
  data() {
    return {
      alias: "",
      game: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["addParticipant", "updatePublicId"]),
    submitForm() {
      if (this.alias && this.game) {
        const request = axios.post(myVar + "/api/participant/", {
          alias: this.alias,
          game: this.game,
        });
        request
          .then((response) => {
            this.addParticipant(this.alias);
            this.updatePublicId(this.game);
            this.$store.dispatch("setParticipantId", response.data.uuidP);
            this.$router.push({ name: "waitingpage" });
          })
          .catch((error) => {
            if (error && error.response && error.response.status === 403) {
              this.errorMessage = error.response.data.detail;
            } else {
              console.error(error);
            }
          });
      } else {
        this.errorMessage = "Por favor ingrese su alias y el ID del juego.";
      }
    },
  },
};
</script>
