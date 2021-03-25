<template>
    <!-- Page Contact-->
    <div class="bg-white overflow-hidden">
        <h2 class="kf-moveInDown text-3xl sm:text-4xl md:text-5xl text-center tracking-tight font-extrabold text-gray-900 pt-5 sm:pt-14 pb-8">Contact</h2>
        <!-- Card Contact -->
        <div class="kf-appear-2 container-contact">
            <div class="lg:py-4 lg:pb-32 lg:flex lg:justify-center">
                <div class="bg-blue-50 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="bg-white lg:w-1/2 lg:p-5 ">
                        <picture>
                            <source media="(max-width: 575.97px)" srcset="~/assets/img/undraw_Work_time_re_hdyv.svg">
                            <source media="(min-width: 575.98px)" srcset="~/assets/img/undraw_Work_time_re_hdyv.svg">
                            <img class="kf-moveInLeft h-48 w-full sm:h-60 md:h-64 lg:h-full lg:rounded-lg" src="~/assets/img/undraw_Work_time_re_hdyv.svg" alt="Photographie du dôme en verre d'un batiment moderne">
                        </picture> 
                    </div>
                    <div class="mx-auto my-auto py-12 px-10 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 class="lg:mt-5 text-2xl text-gray-800 font-bold">Partagez nous votre<span class="text-blue-600"> expérience</span></h2>
                        <p class="mt-4 text-gray-600">Temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                        <div class="mt-8 mb-16">
                            <p class="text-xl">Mail: geode@geode.com</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>   
</template>

<script>
export default {
    name: 'contact',
}
</script>
