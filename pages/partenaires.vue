<template>
    <div>
        <section class="relative bg-white overflow-hidden pb-20">
            <h1 class="kf-moveInDown text-3xl sm:text-4xl md:text-5xl text-center tracking-tight font-extrabold text-gray-900 pt-5 sm:pt-14">Partenaires</h1>
            <h2 class="kf-appear-1 text-lg text-gray-700 mt-5 lg:mt-10 w-5/6 lg:w-3/5 mx-auto text-left lg:text-justify">
                Le projet <a href="https://fabrique-formations.univ-lille.fr/" class="text-pink-900 hover:text-pink-800" rel="noopener noreferrer" target="_blank">Fabrique des formations</a> (I-SITE ULNE / ANR-16-IDEX-0004 ULNE) (Learning-Fab) est réalisé avec le soutien financier de l’État français dans le cadre du Programme « Investissements d’avenir » géré par l’Agence Nationale de la Recherche française (ANR).
            </h2>
            <!-- Logos Partenaires -->
            <div class="kf-moveInUp flex flex-col md:flex-row justify-center w-auto h-full mt-4">
                <div class="mx-2 sm:mx-5">
                    <a href="https://fabrique-formations.univ-lille.fr/" class="w-auto" rel="noopener noreferrer" target="_blank">
                        <img src="~/assets/img/la-fabrique-des-formations-logo-text.png" class="h-48 mx-auto my-12 transform translate-x-4 sm:translate-x-8" width="264.88" height="192" alt="logo la fabrique des formations de l'université de lille">
                    </a>
                    <a href="http://www.isite-ulne.fr/index.php/fr/page-daccueil/" rel="noopener noreferrer" target="_blank">
                        <img src="~/assets/img/logo-i-universite-lille-site-partenaires.png" class="w-auto h-32 sm:h-36 mx-auto my-8 sm:transform sm:translate-x-6" width="380.03" height="144" alt="logo i-site universite de lille">
                    </a>
                </div>
                <div class="mx-2 sm:mx-5">
                    <a href="https://www.gouvernement.fr/un-programme-pour-investir-l-avenir" class="w-auto" rel="noopener noreferrer" target="_blank">
                        <img src="~/assets/img/investir-avenir.png" class="h-44 mx-auto my-12" width="176" height="176" alt="logo investir avenir">
                    </a>
                    <a href="https://www.univ-lille.fr/"  rel="noopener noreferrer" target="_blank">
                        <img src="~/assets/img/800px-Université_de_Lille_logo.png" class="w-auto h-32 mx-auto my-16" width="266.66" height="128" alt="logo université de lille">
                    </a>
                </div>
            </div>
        </section>
        <!-- BottomNav -->
        <BottomNav></BottomNav>
    </div>
</template>

<script>
export default {
    name: 'partenaires',
    transition: 'page',
    head () {
        return {
            title: 'Partenaires',
        }
    },
}
</script>

