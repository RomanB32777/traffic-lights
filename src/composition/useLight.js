import { ref, computed, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export const useLight = ({ color, lifeTime }) => {
    const router = useRouter()
    const route = useRoute()
    const dataLifeTime = ref(route.params.timer ? route.params.timer : lifeTime)
    const timer = ref(null)
    const timeout = ref(null)

    const getCurrentTime = computed(() => {
        return dataLifeTime.value / 1000;
    })

    const getAllRouters = computed(() => {
        return router.options.routes.filter((route) => route.path !== "/");
    })

    const startTimer = () => {
        timer.value = setInterval(() => {
            dataLifeTime.value -= 1000;
        }, 1000);
    }

    const stopTimer = () => {
        clearTimeout(timer.value);
    }

    onMounted(() => {
        const nextRoute = getAllRouters.value.find(
            (route) =>
                route.path !== router.options.history.state.back &&
                route.path !== "/yellow"
        );

        timeout.value = setTimeout(() => {
            route.path !== "/yellow"
                ? router.push(getAllRouters.value[1])
                : router.push(nextRoute);
        }, dataLifeTime.value);

        startTimer()
    })

    onUnmounted(() => {
        stopTimer()
        clearTimeout(timeout.value);
    })

    onBeforeMount(() => {
        window.onbeforeunload = function (e) {
            sessionStorage.setItem(
              "light",
              JSON.stringify({ name: color, timer: dataLifeTime.value })
            );
          };
    })

    return {
        dataLifeTime, getCurrentTime, getAllRouters
    }

}