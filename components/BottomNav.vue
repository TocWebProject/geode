<template>
   <!--  Call to actions -->
    <div class="border-top border-gray-200">
      <div class="container flex flex-wrap flex-col-reverse md:flex-row mx-auto justify-center items-center align-middle mt-6 mb-3 px-3">
        <NuxtLink v-if="$route.path !== '/'" to="/#geode" class="w-52 md:w-auto md:mr-2 mb-4 flex items-center justify-center px-5 py-2 md:py-4 md:px-10 border border-pink-100 text-sm lg:text-base font-medium rounded-md text-white bg-pink-800 hover:bg-opacity-80 md:text-lg">
          Débutez le test
        </NuxtLink>
        <NuxtLink v-if="$route.path !== '/documentation'" to='/documentation' class="w-52 md:w-auto md:mr-2 mb-4 flex items-center justify-center px-5 py-2 md:py-4 md:px-10 border border-pink-600 text-sm lg:text-base font-medium rounded-md text-pink-700  bg-white hover:bg-gray-200 hover:bg-opacity-60 md:text-lg">
          Documentation
        </NuxtLink>
        <NuxtLink v-if="$route.path !== '/partenaires'" to='/partenaires' class="w-52 md:w-auto md:mr-2 mb-4 flex items-center justify-center px-5 py-2 md:py-4 md:px-10 border border-pink-600 text-sm lg:text-base font-medium rounded-md text-pink-700  bg-white hover:bg-gray-200 hover:bg-opacity-60 md:text-lg ">
          Partenaires
        </NuxtLink>
        <NuxtLink v-if="$route.path !== '/contact'" to='/contact' class="w-52 md:w-auto flex mb-4 items-center justify-center px-5 py-2 md:py-4 md:px-10 border border-pink-600 text-sm lg:text-base font-medium rounded-md text-pink-700  bg-white hover:bg-gray-200 hover:bg-opacity-60 md:text-lg">
          Contact
        </NuxtLink>
      </div>
    </div> 
</template>

<script>
export default {
    name: 'BottomNav',
    layout: 'default',
}
</script>
