<template>
  <div class="relative bg-white w-screen flex items-center justify-center pb-40 h-screen">
    <div class="text-center">
        <h1 class="kf-moveInLeft text-4xl tracking-tight font-extrabold text-blue-600 sm:text-5xl md:text-6xl pb-8" v-if="error.statusCode === 404">Page non trouvée</h1>
        <h1 class="kf-moveInLeft text-4xl tracking-tight font-extrabold text-blue-600 sm:text-5xl md:text-6xl pb-8" v-else>Une erreur est survenue</h1>
        <NuxtLink to='/' class="kf-appear-2 w-1/2 px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700  bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  Page d'accueil
        </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  transition: 'page',   
}
</script>
