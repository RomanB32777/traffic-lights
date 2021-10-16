<template>
  <div class="light">
    <div class="traffic-lights">
      <div
        class="light-sector"
        v-for="route in getAllRouters"
        :key="route.name"
        :class="[
          route.name,
          { currentLight: $route.name === route.name },
          { blink: dataLifeTime <= 3000 && $route.name === route.name },
        ]"
      />
    </div>
    <p>До смены сигнала: {{ getCurrentTime }} сек.</p>
  </div>
</template>

<script>
import { useLight } from "../composition/useLight";
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    lifeTime: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { dataLifeTime, getCurrentTime, getAllRouters } = useLight(props);

    return {
      dataLifeTime,
      getCurrentTime,
      getAllRouters,
    };
  },
};
</script>

<style scoped>
</style>