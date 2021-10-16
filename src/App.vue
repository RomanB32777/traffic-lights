<template>
  <div class="lights">
    <router-view :key="$route.fullPath" />
  </div>
</template>


<script>
export default {
  mounted() {
    const beforeUpdateRoute = JSON.parse(sessionStorage.getItem("light"));
    if (beforeUpdateRoute) {
      const { name, timer } = beforeUpdateRoute;
      name &&
        timer &&
        this.$router.push({
          name,
          params: {
            timer,
          },
        });
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.lights {
  height: 100vh;
}
.light {
  height: 100%;
}
.light p {
  text-align: center;
  font-size: 1.5rem;
}
.currentLight.green {
  background-color: green;
}
.currentLight.yellow {
  background-color: yellow;
}
.currentLight.red {
  background-color: red;
}
.traffic-lights {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}
.traffic-lights .light-sector {
  width: 180px;
  height: 180px;
  border: 2px solid black;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.light-sector-color {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.blink {
  animation: blink 1s linear infinite;
}
@keyframes blink {
  50% {
    background: none
  }
}
</style>