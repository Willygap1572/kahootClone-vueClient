<template>
  <div>
    <h1>Esperando a que comience el juego...</h1>
    <p>{{ status }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
const myVar = import.meta.env.VITE_DJANGOURL;

export default {
  name: "WaitingPage",
  computed: {
    ...mapState(["publicId"]),
    status() {
      return `ID del juego: ${this.publicId}`;
    },
  },
  data() {
    return {
      game: {},
    };
  },
  methods: {
    async checkGameStatus() {
      try {
        const response = await axios.get(myVar + "/api/games/", {
          publicId: this.publicId,
        });
        this.game = response.data.filter(
          (game) => Number(game.publicId) === Number(this.publicId)
        )[0];
        if (this.game.state === 2) {
          setTimeout(() => {
            this.$router.push("/question");
          }, Number(this.game.countdownTime) * 1000);
        } else {
          setTimeout(this.checkGameStatus, 200);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.checkGameStatus();
  },
};
</script>
