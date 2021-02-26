<template>
  <footer class="text-gray-700 body-font">
    <!--  4 links columns -->
    <div class="bg-gray-50 px-5 py-12 mx-auto">
      <div class="flex flex-wrap md:justify-center text-center -mb-10 -mx-4">
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-1">PARTENAIRE</h2>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-1">PARTENAIRE</h2>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-1">PARTENAIRE</h2>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-xl mb-1">PARTENAIRE</h2>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!--  Call to actions -->
    <div class="border-top border-gray-200">
        <div class="container bg-blue-100 flex flex-wrap mx-auto justify-center mt-6 mb-3 px-3">
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
      <div class="container mx-auto text-center lg:w-2/3 w-10/12 py-8 sm:py-5 px-5">
        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-center text-center text-gray-800 text-sm xl:text-base">
          Ce site ne collecte aucune donnée personnelle et ne contient aucun cookie, traceur de réseaux sociaux ou captcha.  Géode est extrêmement sensible aux questions de confidentialité, de sécurité et de souveraineté.
        </span>
        <div class="flex justify-center text-sm mt-2">
          <a href="#" class="mr-5 title-font tracking-widest text-blue-900 hover:text-gray-700 border-b-2 border-indigo-100 hover:border-blue-200">MENTIONS LEGALES</a>
          <a href="#" class="title-font tracking-widest text-blue-900 hover:text-gray-700 border-b-2 border-indigo-100 hover:border-blue-200">PLAN DE SITE</a>
        </div>
      </div>
    </div>
    <!--  Partners Logo -->
    <div class="bg-blue-900">
      <div class="container mx-auto py-8 sm:py-3 px-1 flex flex-wrap flex-col sm:flex-row">
        <p class="my-auto text-center sm:text-left title-font font-medium tracking-widest text-lg">
          <a href="https://fabrique-formations.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="font-semibold text-blue-50 hover:text-blue-200 ">La Fabrique des Formations</a>
        </p>
        <div class="sm:flex flex-wrap justify-center align-middle sm:ml-auto sm:mt-0 mt-6 sm:w-auto w-full text-center">
          <a href="https://www.univ-lille.fr/" rel="noopener noreferrer" target="_blank" class="mx-auto my-auto mr-5">
            <img src="~/assets/img/universite-lille-logo-footer.svg" class="w-auto h-10 mx-auto" alt="logo universite de lille">
          </a>
          <a href="http://www.isite-ulne.fr/index.php/fr/page-daccueil/" rel="noopener noreferrer" target="_blank">
            <img src="~/assets/img/logo-i-universite-lillesite.png" class="w-auto h-20 mx-auto" alt="logo universite de lille">
          </a>
        </div>
      </div>
    </div>
  </footer>    
</template>

<script>
export default {
    name: 'TheFooter',
}
</script>
