<template>
  <div>
    <!-- Page d'accueil -->
    <div class="relative bg-white h-full overflow-hidden">
      <div class="max-w-7xl mx-auto xl:mx-20">
        <div class="relative pb-4 bg-transparent sm:pb-6 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <!-- Header Text -->
          <section class="kf-moveInLeft mt-5 mr-auto max-w-8xl px-4 sm:mt-7 sm:px-6 lg:mt-24 lg:px-10 xl:mt-28 xl:pl-20">
            <div class="text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Évaluez l’ouverture</span>
                <span class="block text-pink-800 xl:inline">d’un environnement éducatif</span>
              </h1>
              <h2 class="mt-2 text-lg text-gray-500 sm:text-xl sm:max-w-xl sm:mx-auto lg:mt-5 md:text-3xl lg:mx-0 lg:pr-10">
                GÉODE : un instrument au service <br>de l'ingénierie et de la recherche
              </h2>
              <div class="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="#geode" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10">
                    Débutez le test
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <NuxtLink to='/documentation' href="#" class="w-full flex items-center justify-center px-8 py-3 border border-pink-600 text-base font-medium rounded-md text-pink-800 bg-white hover:bg-gray-100 hover:bg-opacity-60 md:py-4 md:text-lg md:px-10">
                    Documentation
                  </NuxtLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- Header Img -->
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 xl:w-5/12 lg:mr-16 xl:mr-18 2xl:mr-44">
          <img class="kf-moveInUp h-56 w-full sm:h-72 md:h-96 lg:h-full" src="~/assets/img/undraw_Data_re_80ws.svg" width="630" height="606" alt="Illustration de trois personnes manipulant des graphiques">
      </div>
    </div>
    <!-- Geode Test Section -->
    <TheTest></TheTest>
    <!-- BottomNav -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
export default {
  name: 'accueil',
  transition: 'page',
}
</script>
