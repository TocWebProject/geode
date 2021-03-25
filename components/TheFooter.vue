<template>
  <footer class="text-gray-700 body-font">
    <!--  Call to actions -->
    <div class="border-top border-gray-200">
        <div class="container flex flex-wrap mx-auto justify-center mt-6 mb-3 px-3">
          <NuxtLink to="/#geode" class="w-auto mr-2 mb-2 flex items-center justify-center px-5 py-2 border border-transparent text-sm lg:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Débutez le test
          </NuxtLink>
          <NuxtLink to='/documentation' class="w-auto mr-2 mb-2 flex items-center justify-center px-5 py-2 border border-transparent text-sm lg:text-base font-medium rounded-md text-blue-700  bg-white hover:bg-blue-200 md:text-lg">
            Documentation
          </NuxtLink>
          <NuxtLink to='/references' class="w-auto mr-2 mb-2 flex items-center justify-center px-5 py-2 border border-transparent text-sm lg:text-base font-medium rounded-md text-blue-700  bg-white hover:bg-blue-200 md:text-lg ">
            Références
          </NuxtLink>
          <NuxtLink to='/contact' class="w-auto flex mb-2 items-center justify-center px-5 py-2 border border-transparent text-sm lg:text-base font-medium rounded-md text-blue-700  bg-white hover:bg-blue-200 md:text-lg">
            Contact
          </NuxtLink>
        </div>
      </div>
    <!--  Legal Mentions -->
    <div class="bg-blue-50">
      <div class="container mx-auto text-center lg:w-3/5 w-10/12 py-8 sm:py-5 px-5">
        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-center text-center text-gray-800 text-sm xl:text-base">
          Ce site ne collecte aucune donnée personnelle et ne contient aucun cookie, traceur de réseaux sociaux ou captcha. Géode est extrêmement sensible aux questions de confidentialité, de sécurité et de souveraineté.
          La propriété intellectuelle de la grille Géode appartient à Annie Jézégou en qualité d'auteur sous la licence CC-by-nd 4.0.
        </span>
        <div class="flex justify-center text-sm mt-2">
          <NuxtLink to="/mentionslegales" class="mr-5 title-font tracking-widest text-blue-900 hover:text-gray-700 border-b-2 border-indigo-100 hover:border-blue-200">MENTIONS LEGALES</NuxtLink>
        </div>
      </div>
    </div>
    <!--  Partners Logo -->
    <div class="bg-blue-900">
      <div class="container mx-auto py-8 sm:py-3 px-2 flex flex-wrap flex-col md:flex-row">
        <p class="my-auto text-center title-font font-medium tracking-widest text-xl">
          <a href="https://fabrique-formations.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="font-semibold text-blue-50 hover:text-blue-200 ">La Fabrique des Formations</a>
        </p>
        <div class="md:flex flex-wrap justify-center align-middle md:ml-auto md:mt-0 mt-6 md:w-auto w-2/3 text-center mx-auto md:mx-px">
          <a href="https://www.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="mx-auto my-auto mr-5">
            <img src="~/assets/img/universite-lille-logo-footer.svg" class="w-auto h-14 mx-auto" alt="logo universite de lille">
          </a>
          <a href="http://www.isite-ulne.fr/index.php/fr/page-daccueil/" rel="noopener noreferrer" target="_blank">
            <img src="~/assets/img/logo-i-universite-lille-site.png" class="w-auto h-20 mx-auto" alt="logo universite de lille">
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
