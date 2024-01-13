<template>
    <div>
        <h1>Seção Finalizada com Sucesso!!</h1>
    </div>
</template>

<script>
import { onBeforeMount } from 'vue';
export default {
    name: "Logout",
    setup() {
    onBeforeMount(() => {
        localStorage.removeItem("token")
    })
    }
}
</script>