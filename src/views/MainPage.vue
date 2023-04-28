<template>
  <v-card
    style="height: 100%; background: grey; width: 100%"
    class="justify-center align-center d-flex"
  >
    <v-row class="ma-0 pa-0 justify-center align-center d-flex">
      <router-link to="/bingo">
        <img src="./static/main/빙고.png" class="ma-3 img-icon" />
      </router-link>
      <router-link to="/ladder">
        <img src="./static/main/사다리타기.jpg" class="ma-3 img-icon" />
      </router-link>
      <router-link to="/roulette">
        <img src="./static/main/룰렛.jpg" class="ma-3 img-icon" />
      </router-link>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Main-page",
  methods: {
    router(payload: string) {
      this.$router.push({ name: payload });
    },
  },
});
</script>

<style scoped>
.img-icon {
  width: 225px;
  height: 225px;
  cursor: pointer;
}
</style>
