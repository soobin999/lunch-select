<template>
  <canvas ref="canvas" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    const state = {
      player: {
        x: 0,
        y: 0,
      },
      score: 0,
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          state.player.x -= 10;
          break;
        case "ArrowRight":
          state.player.x += 10;
          break;
        case "ArrowUp":
          state.player.y -= 10;
          break;
        case "ArrowDown":
          state.player.y += 10;
          break;
      }
    };

    onMounted(() => {
      const canvas = canvasRef.value;
      const ctx = canvas?.getContext("2d");

      const draw = () => {
        // Clear canvas
        ctx?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

        // Draw player
        ctx?.fillRect(state.player.x, state.player.y, 50, 50);

        // Update score
        state.score++;

        // Schedule next draw
        requestAnimationFrame(draw);
      };

      // Start game loop
      requestAnimationFrame(draw);

      // Listen for user input
      window.addEventListener("keydown", handleKeyDown);
    });

    return {
      canvasRef,
    };
  },
});
</script>
