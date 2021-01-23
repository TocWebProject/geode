<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6 pb-4">
      <NuxtLink to="/" class="flex items-center flex-no-shrink text-blue-900 mr-8 md:mr-5 mb-2 hover:text-blue-700">
        <img src="~/assets/img/bar-chart.png" class="w-9 h-9 mb-2 mr-3" alt="Logo Grille Géode">
        <h1 class="font-semibold text-3xl xl:text-4xl tracking-tight">La Grille Géode</h1>
      </NuxtLink>
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded outline-none text-teal-lighter border-teal-black hover:text-black hover:border-blue-100">
          <svg class="h-3 w-3" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-xl sm:flex-grow text-black">
          <NuxtLink to="/documentation" class="no-underline block mt-5 sm:inline-block sm:mt-0 text-teal-lighter hover:text-blue-600 mr-4">
            Documentation
          </NuxtLink>
          <NuxtLink to="/references" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-blue-600 mr-4">
            Références
          </NuxtLink>
          <NuxtLink to="/contact" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-blue-600">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'TheNavbar',
    data() {
        return {
        open: false,
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>

