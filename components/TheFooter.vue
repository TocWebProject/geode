<template>
  <footer class="text-gray-700 body-font">
    <!--  Legal Mentions -->
    <div class="bg-white">
      <div class="container mx-auto w-72 sm:w-full text-center py-8 sm:py-5 px-1">
        <span class="sm:mt-0 mt-2 text-center text-gray-800 text-sm xl:text-base">
          Ce site ne collecte aucune donnée personnelle et ne contient aucun cookie, traceur de réseaux sociaux ou captcha. 
          <br>GÉODE est extrêmement sensible aux questions de confidentialité, de sécurité et de souveraineté.
          <br>La propriété intellectuelle de GÉODE appartient à Annie Jézégou en qualité d'auteur sous la licence CC-by-nc-nd 4.0.
        </span>
        <div v-if="$route.name !== 'mentionslegales'" class="flex justify-center text-sm mt-2">
          <NuxtLink to="/mentionslegales" class="mr-5 title-font tracking-widest text-pink-900 hover:text-gray-700 border-b-2 border-pink-100 hover:border-pink-200">MENTIONS LÉGALES</NuxtLink>
        </div>
      </div>
    </div>
    <!--  Partners Logo -->
    <div class="bg-pink-900">
      <div class="container mx-auto py-8 sm:py-3 px-2 flex flex-wrap flex-col md:flex-row">
        <p class="my-auto text-center title-font font-medium tracking-widest text-xl">
          <a href="https://fabrique-formations.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="font-semibold text-pink-50 hover:text-pink-200 ">La Fabrique des Formations</a>
        </p>
        <div class="md:flex flex-wrap justify-center align-middle md:ml-auto md:mt-0 mt-6 md:w-auto w-2/3 text-center mx-auto md:mx-px">
          <a href="https://www.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="mx-auto my-auto mr-5">
            <img src="~/assets/img/universite-lille-logo-footer.svg" class="w-auto h-14 mx-auto" width="162.75" height="56" alt="logo universite de lille">
          </a>
          <a href="http://www.isite-ulne.fr/index.php/fr/page-daccueil/" rel="noopener noreferrer" target="_blank">
            <img src="~/assets/img/logo-i-universite-lille-site.png" class="w-auto h-20 mx-auto" width="211.13" height="80" alt="logo universite de lille i-site">
          </a>
        </div>
      </div>
    </div>
  </footer>    
</template>

<script>
export default {
    name: 'TheFooter',
    layout: 'default',
}
</script>
