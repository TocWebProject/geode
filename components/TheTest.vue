<template>
    <section class="min-h-screen bg-blue-50">
        <h3 id="geode" class="text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-5xl md:text-6xl">Débutez le test</h3>
        <img src="~/assets/img/undraw_education_f8ru.svg" class="kf-appear-1 mx-auto w-5/12 sm:w-1/4 lg:w-1/6 pt-10 pl-10 xl:pl-20" alt="illustration de livres">
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