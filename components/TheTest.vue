<template>
    <section class="min-h-screen bg-gray-50">
        <h3 id="geode" class="text-5xl text-center tracking-tight font-extrabold text-gray-900 pt-20 sm:text-6xl md:text-7xl">GÉODE</h3>
        <hr class="hr-home w-28 mx-auto">
        <h4 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-10 sm:text-3xl md:text-4xl">Préambule</h4>
        <div class="w-11/12 md:w-3/4 mx-auto text-justify text-lg pt-5">
            <p class="text-center">
                <span class="font-semibold italic"> « L’ouverture en formation renvoie à un ensemble de dispositifs flexibles et autonomisants
                dont la principale propriété est d’ouvrir à l’apprenant des libertés de choix, afin qu’il puisse
                exercer un contrôle sur sa formation et sur ses apprentissages »</span> (Jézégou, 2005).
            </p>
            <p class="pt-4">
                GÉODE est l’acronyme de Grille d’Évaluation de l’Ouverture D’un Environnement
                éducatif. Elle permet également d’évaluer le degré d’ouverture des 14 composantes qui
                structurent tout environnement éducatif, ainsi que celui des trois catégories dont elles se
                réfèrent.  Quatre d’entre elles sont dites <span class="font-semibold">« spatio-temporelles »</span>; sept sont qualifiées de
                <span class="font-semibold">« pédagogiques »</span>  tandis que les trois dernières renvoient à la <span class="font-semibold">« communication éducative
                médiatisée »</span>. Les résultats de GÉODE sont exprimés en pourcentage. Ils permettent ainsi de
                les positionner respectivement sur un continuum constitué de 10 graduations allant de
                « fermé » (aucune liberté de choix offerte à l’apprenant) à « hautement ouvert  + » (totale
                liberté de choix offerte à l’apprenant).
            </p>
            <p class="pt-4">
                L’auteur de GÉODE est <a class="text-pink-800 hover:border-pink-600" rel="noopener noreferrer" target="_blank" href="https://pro.univ-lille.fr/annie-jezegou/">Annie Jézégou</a>, Professeur des Universités au
                laboratoire CIREL (ULR 4354), équipe Trigone, Université de Lille. En 2010, GÉODE a fait
                l’objet <a class="text-pink-800 hover:border-pink-600" rel="noopener noreferrer" target="_blank" href="http://www.ijede.ca/index.php/jde/article/view/625">d’une publication scientifique</a> dans la Revue de l’Éducation à Distance/Journal of
                Distance Education (Jézégou, 2010).
            </p> 
            <p class="pt-4">
                La présente application constitue la version Web de GÉODE.
            </p>   
        </div>
        <h4 id="startGeode" class="text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-10 sm:text-3xl md:text-4xl">Débutez le test</h4>
        <img src="~/assets/img/undraw_education_f8ru.svg" class="kf-appear-1 mx-auto w-5/12 sm:w-1/4 lg:w-1/6 pt-8 pl-10 xl:pl-20" width="290.16" height="184.33" alt="illustration de livres">
        <!--  Choix de la modalité de la formation, elle se déroule en -> Distanciel? / Présentiel? / Présentiel et Distanciel? -->
        <transition name="fade" mode="out-in">
            <TestChoixModalite 
                v-if="firstStep" 
                v-on:choix-presentiel="showTestPresentiel" 
                v-on:choix-distanciel="showTestDistanciel" 
                v-on:choix-presentiel-distanciel="showTestPresentielDistanciel"
            />
            <!-- Test en Présentiel -->
            <TestPresentiel v-if="testPresentiel" v-on:back-to-first-step="restartFirstStep"/>
            <!-- Test en Distanciel -->
            <TestDistanciel v-if="testDistanciel" v-on:back-to-first-step="restartFirstStep"/>
            <!-- Test en Présentiel et Distanciel -->
            <TestPresentielDistanciel v-if="testPresentielDistanciel" v-on:back-to-first-step="restartFirstStep"/>
        </transition>
    </section>  
</template>

<script>

export default {
    name: 'TheTest',
    layout: 'default',
    data() {
        return{
            firstStep: true,
            testPresentiel: false,
            testDistanciel: false,
            testPresentielDistanciel: false,
        }
    },
    methods: {
        showTestPresentiel() {
            this.firstStep = false;
            this.testPresentiel = true;
        },
        showTestDistanciel() {
            this.firstStep = false;
            this.testDistanciel = true;
        },
        showTestPresentielDistanciel() {
            this.firstStep = false;
            this.testPresentielDistanciel = true;
        },
        restartFirstStep() {
            this.testPresentiel = false;
            this.testDistanciel = false;
            this.testPresentielDistanciel = false;
            this.firstStep = true;
        }
    }
}
</script>

<style scoped>
/* Css transition entre les components du test */
.fade-enter {
    opacity: 0;
}

.fade-enter-active{
    transition: opacity 450ms ease;
}

.fade-leave-active {
    transition: opacity 650ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>